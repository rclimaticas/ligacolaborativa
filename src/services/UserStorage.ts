/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import localforage from 'localforage';

localforage.config({
  name: 'myApp',
  storeName: 'user_data',
  description: 'Armazenamento local para dados do usuário',
});

export const saveUserData = async (key: string, value: any): Promise<void> => {
  try {
    await localforage.setItem(key, value);
    console.log('Dados do usuário salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

export const getUserData = async (key: string): Promise<any> => {
  try {
    const data = await localforage.getItem(key);
    console.log('Dados do usuário recuperados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao recuperar dados do usuário:', error);
  }
};

export const removeUserData = async (key: string): Promise<void> => {
  try {
    await localforage.removeItem(key);
    console.log('Dados do usuário removidos com sucesso!');
  } catch (error) {
    console.error('Erro ao remover dados do usuário:', error);
  }
};

export const logout = async (): Promise<void> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Erro ao realizar logout na API.');
    }
    await localforage.removeItem('user');
    console.log('Dados do usuário removidos com sucesso!');
    window.location.href = '/';
  } catch (error) {
    console.error('Erro ao realizar logout:', error);
  }
};
