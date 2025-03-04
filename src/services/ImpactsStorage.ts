/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import localforage from 'localforage';

localforage.config({
  name: 'ligaColaborativa',
  storeName: 'impacts',
  description: 'Armazenamento local para dados de impactos',
});

export const saveImpactData = async (
  key: string,
  value: any
): Promise<void> => {
  try {
    await localforage.setItem(key, value);
    console.log('Dados de impactos salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados de impactos:', error);
  }
};

export const getImpactData = async (key: string): Promise<any> => {
  try {
    const data = await localforage.getItem(key);
    console.log('Dados de impactos recuperados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao recuperar dados de impactos:', error);
  }
};

export const removeImpactData = async (key: string): Promise<void> => {
  try {
    await localforage.removeItem(key);
    console.log('Dados de impactos removidos com sucesso!');
  } catch (error) {
    console.error('Erro ao remover dados de impactos:', error);
  }
};
