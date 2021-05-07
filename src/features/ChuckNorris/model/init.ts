import {
  $favouriteJokes,
  $isTimerRunning,
  $jokeToDisplay,
  clearFavouriteJokesButtonClicked,
  favouriteButtonClicked,
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

// split({
//   source: requestJokeWithIntervalButtonClicked,
//   match: {
//     text: msg => msg.type === 'text',
//     audio: msg => msg.type === 'audio',
//   },
//   cases: {
//     text: showTextPopup,
//     audio: playAudio,
//     __: reportUnknownMessageType,
//   },
// })

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

$isTimerRunning.on(timerTurnedOn, () => true).reset(timerTurnedOff);

// $jokeToDisplay.on(requestJokeWithIntervalButtonClicked, (_, joke) => joke);

$favouriteJokes.on(favouriteButtonClicked, (favouriteJokes, joke) => {
  const isJokeFavourited = favouriteJokes.some(el => el.id === joke.id);

  if (isJokeFavourited) return favouriteJokes.filter(el => el.id !== joke.id);

  if (favouriteJokes.length < 10) return [...favouriteJokes, joke];

  const [firstJoke, ...otherJokes] = favouriteJokes;

  return [...otherJokes, joke];
});

$favouriteJokes.watch(favouriteJokes =>
  window.localStorage.setItem('favouriteJokes', JSON.stringify(favouriteJokes)),
);

$favouriteJokes.on(clearFavouriteJokesButtonClicked, () => []);

$jokeToDisplay.reset(requestRandomJokeFx);
