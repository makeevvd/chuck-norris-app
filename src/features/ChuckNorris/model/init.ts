import {
  $favouriteJokes,
  $isTimerRunning,
  $jokeToDisplay,
  clearFavouriteJokesButtonClicked,
  favouriteButtonClicked,
  MainPageGate,
  requestJokeButtonClicked,
  requestJokeWithIntervalButtonClicked,
  requestRandomJokeFx,
  timerTurnedOff,
  timerTurnedOn,
} from './index';
import { forward, sample, split } from 'effector';
import { requestRandomJoke } from '../../../api/jokes';

requestRandomJokeFx.use(requestRandomJoke);

forward({
  from: requestJokeButtonClicked,
  to: requestRandomJokeFx,
});

const timerAndJoke = sample({
  clock: requestJokeWithIntervalButtonClicked,
  source: [$isTimerRunning, $jokeToDisplay],
  fn: source => ({
    isTimerRunning: source[0],
    joke: source[1],
  }),
});

split({
  source: timerAndJoke,
  match: {
    turnOn: timerAndJoke => timerAndJoke.isTimerRunning === false,
    turnOff: timerAndJoke => timerAndJoke.isTimerRunning === true,
  },
  cases: {
    turnOff: timerTurnedOff,
    turnOn: timerTurnedOn,
  },
});

forward({
  from: timerTurnedOn,
  to: requestRandomJokeFx,
});

$jokeToDisplay.on(requestRandomJokeFx.doneData, (_, joke) => joke);

$isTimerRunning.on(timerTurnedOn, () => true).reset(timerTurnedOff, MainPageGate.close);

$favouriteJokes.on(favouriteButtonClicked, (favouriteJokes, joke) => {
  const isJokeFavourite = favouriteJokes.some(el => el.id === joke.id);

  if (isJokeFavourite) return favouriteJokes.filter(el => el.id !== joke.id);

  if (favouriteJokes.length < 10) return [...favouriteJokes, joke];

  const [, ...otherJokes] = favouriteJokes;

  return [...otherJokes, joke];
});

$favouriteJokes.watch(favouriteJokes =>
  window.localStorage.setItem('favouriteJokes', JSON.stringify(favouriteJokes)),
);

$favouriteJokes.on(clearFavouriteJokesButtonClicked, () => []);

$jokeToDisplay.reset(requestRandomJokeFx);
