/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable no-console */
// /* eslint-disable consistent-return */
// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import localforage from 'localforage';

// localforage.config({
//   name: 'myApp',
//   storeName: 'user_data',
//   description: 'Armazenamento local para dados do usuário',
// });

// export const saveUserData = async (key: string, value: any): Promise<void> => {
//   try {
//     await localforage.setItem(key, value);
//     console.log('Dados do usuário salvos com sucesso!');
//   } catch (error) {
//     console.error('Erro ao salvar dados do usuário:', error);
//   }
// };

// export const getUserData = async (key: string): Promise<any> => {
//   try {
//     const data = await localforage.getItem(key);
//     console.log('Dados do usuário recuperados:', data);
//     return data;
//   } catch (error) {
//     console.error('Erro ao recuperar dados do usuário:', error);
//   }
// };

// export const removeUserData = async (key: string): Promise<void> => {
//   try {
//     await localforage.removeItem(key);
//     console.log('Dados do usuário removidos com sucesso!');
//   } catch (error) {
//     console.error('Erro ao remover dados do usuário:', error);
//   }
// };

// export const logout = async (): Promise<void> => {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
//       method: 'POST',
//       credentials: 'include',
//     });

//     if (!response.ok) {
//       throw new Error('Erro ao realizar logout na API.');
//     }
//     await localforage.removeItem('user');
//     console.log('Dados do usuário removidos com sucesso!');
//     window.location.href = '/';
//   } catch (error) {
//     console.error('Erro ao realizar logout:', error);
//   }
// };

/* eslint-disable @typescript-eslint/no-explicit-any */

import Cookie from 'js-cookie';

// Função para abrir o IndexedDB
export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('myApp', 2); // Versão 2
    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      console.log('Atualizando o banco de dados para a versão 2');
      if (!db.objectStoreNames.contains('user_data')) {
        // Criar o ObjectStore com autoIncrement
        db.createObjectStore('user_data', { autoIncrement: true });
        console.log('ObjectStore "user_data" criado com auto incremento');
      }
    };

    request.onsuccess = (event: any) => {
      resolve(event.target.result); // Conexão bem-sucedida
    };

    request.onerror = (event: any) => {
      reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
    };
  });
};

// Função para salvar dados no IndexedDB
export const saveUserData = async (value: any): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    // Salva o item. A chave será gerada automaticamente.
    objectStore.add(value);

    transaction.oncomplete = () => {
      console.log('Dados do usuário salvos com sucesso!');
    };

    transaction.onerror = () => {
      console.error('Erro ao salvar dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao salvar dados no IndexedDB:', error);
  }
};

// Função para recuperar dados do IndexedDB por chave
export const getUserData = async (): Promise<any> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readonly');
    const objectStore = transaction.objectStore('user_data');
    const request = objectStore.getAll();

    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        const data = request.result ?? [];
        console.log('Todos os dados do usuário recuperados:', data);
        resolve(data.length > 0 ? data[data.length - 1] : null);
      };

      request.onerror = () => {
        console.error('Erro ao recuperar dados do usuário');
        reject('Erro ao recuperar dados');
      };
    });
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
    throw error;
  }
};

export const updateUserData = async (
  key: number,
  newValue: any
): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    const request = objectStore.get(key);

    request.onsuccess = () => {
      if (request.result) {
        const updatedData = { ...request.result, ...newValue };
        objectStore.put(updatedData, key);
        console.log('Dados do usuário atualizados com sucesso!');
      } else {
        console.warn('Nenhum dado encontrado para atualizar.');
      }
    };

    request.onerror = () => {
      console.error('Erro ao buscar dados para atualização.');
    };
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
  }
};

// Função para remover dados do IndexedDB por chave
export const removeUserData = async (key: number): Promise<void> => {
  try {
    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');
    objectStore.delete(key);

    transaction.oncomplete = () => {
      console.log('Dados do usuário removidos com sucesso!');
    };

    transaction.onerror = () => {
      console.error('Erro ao remover dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao acessar o IndexedDB:', error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar logout no backend');
    }

    console.log('Logout realizado com sucesso no backend.');

    const db = await openDB();
    const transaction = db.transaction('user_data', 'readwrite');
    const objectStore = transaction.objectStore('user_data');

    objectStore.clear();

    Cookie.remove('authToken');

    transaction.oncomplete = () => {
      console.log('Todos os dados do usuário foram removidos com sucesso!');
      window.location.href = '/';
    };

    transaction.onerror = () => {
      console.error('Erro ao remover todos os dados do usuário');
    };
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
  }
};
