import axios, { AxiosResponse } from 'axios';
import {JokeType} from "../features/ChuckNorris/models";

const baseURL = 'https://api.chucknorris.io/jokes'

axios.defaults.baseURL = baseURL;


export const requestRandomJoke = (): Promise<AxiosResponse<JokeType>> => axios.get<JokeType>('random');