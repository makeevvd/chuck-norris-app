import {createEffect, createEvent, createStore} from "effector";

export type JokeType = {
    categories: any[]
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

export const $jokeToDisplay = createStore<JokeType | null>(null);

export const $favouriteJokes = createStore<JokeType[] | null>(null);

export const requestRandomJokeFx = createEffect<void, JokeType>();

export const requestJokeButtonClicked = createEvent();

export const requestJokeWithIntervalButtonClicked = createEvent();

export const addJokeToFavouritesButtonClicked = createEvent();


