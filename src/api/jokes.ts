import axios, { AxiosResponse } from 'axios';
import { JokeType } from '../features/ChuckNorris/model';

const baseURL = 'https://api.chucknorris.io/jokes';

axios.defaults.baseURL = baseURL;

export const requestRandomJoke = async (): Promise<JokeType> => {
  const res = await axios.get<JokeType>('random');
  return res.data;
};
