import { createEffect, createEvent, createStore } from 'effector';

export type JokeType = {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};

// const valueInLocalStorage = window.localStorage.getItem(key);
// if (valueInLocalStorage) {
//   return JSON.parse(valueInLocalStorage);
// }
// return defaultValue instanceof Function ? defaultValue() : defaultValue;
// });

const getFavouriteJokesFromLocalStorage = () => {
  debugger;
  const valueInLocalStorage = window.localStorage.getItem('favouriteJokes');
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  }
  return [];
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
