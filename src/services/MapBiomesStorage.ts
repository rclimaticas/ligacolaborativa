/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import localforage from 'localforage';

localforage.config({
  name: 'ligaColaborativa',
  storeName: 'mapbiomes',
  description: 'Armazenamento local para dados da API do Mapa Biomas',
});

export const saveMapBiomesData = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await localforage.setItem(key, value);
    console.log('Dados do Mapa Biomas salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados do Mapa Biomas:', error);
  }
};

export const getMapBiomesData = async (key: string): Promise<any> => {
  try {
    const data = await localforage.getItem(key);
    console.log('Dados do Mapa Biomas recuperados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao recuperar dados do Mapa Biomas:', error);
  }
};

export const removeMapBiomesData = async (key: string): Promise<void> => {
  try {
    await localforage.removeItem(key);
    console.log('Dados do Mapa Biomas removidos com sucesso!');
  } catch (error) {
    console.error('Erro ao remover dados do Mapa Biomas:', error);
  }
};
