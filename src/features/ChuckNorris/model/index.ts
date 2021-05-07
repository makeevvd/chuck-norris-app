import { createEffect, createEvent, createStore } from 'effector';
import { getFavouriteJokesFromLocalStorage } from '../lib/getFavouriteJokesFromLocalStorage';
import { createGate } from 'effector-react';

export type JokeType = {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

export const $jokeToDisplay = createStore<JokeType | null>(null);

export const $favouriteJokes = createStore<JokeType[]>(getFavouriteJokesFromLocalStorage());

export const requestRandomJokeFx = createEffect<void, JokeType>();

export const requestJokeButtonClicked = createEvent();

export const requestJokeWithIntervalButtonClicked = createEvent();

export const timerTurnedOff = createEvent();

export const timerTurnedOn = createEvent();

export const $isTimerRunning = createStore(false);

export const clearFavouriteJokesButtonClicked = createEvent();

export const favouriteButtonClicked = createEvent<JokeType>();

export const MainPageGate = createGate();
