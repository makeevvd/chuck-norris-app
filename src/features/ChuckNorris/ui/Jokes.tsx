import { useStore } from 'effector-react';
import {
  $favouriteJokes,
  $isTimerRunning,
  $jokeToDisplay,
  clearFavouriteJokesButtonClicked,
  requestJokeButtonClicked,
  requestJokeWithIntervalButtonClicked,
  requestRandomJokeFx,
} from '../model';

import React from 'react';
import { JokeCard } from '../../../entities/JokeCard/ui/JokeCard';
import { useInterval } from '../lib/useInterval';
import { FavouriteJokes } from './FavouriteJokes';
import { Button } from '../../../shared/ui/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TitleLink } from '../../../App';
import { PlayIcon } from '../../../entities/JokeCard/ui/PlayIcon';
import { PauseIcon } from '../../../entities/JokeCard/ui/PauseIcon';

const Jokes = () => {
  const delay = 3000;
  const isTimerRunning = useStore($isTimerRunning);
  const favouriteJokes = useStore($favouriteJokes);

  useInterval(
    () => {
      (async () => {
        await requestRandomJokeFx();
      })();
    },
    isTimerRunning ? delay : null,
  );

  const jokeToDisplay = useStore($jokeToDisplay);
  const isJokeLoading = useStore(requestRandomJokeFx.pending);
  return (
    <JokesContainer>
      <div>{jokeToDisplay && !isJokeLoading ? <JokeCard joke={jokeToDisplay} /> : null}</div>
      {isJokeLoading ? (
        <ChuckNorrisImg>
          <img
            src="https://estaticos-cdn.prensaiberica.es/clip/f43b85c4-14e3-4a4d-ab61-cde8e8ed4e0e_16-9-aspect-ratio_default_0.jpg"
            alt=""
          />
        </ChuckNorrisImg>
      ) : null}
      <Buttons>
        <Button
          disabled={isJokeLoading}
          onClick={e => {
            e.preventDefault();
            requestJokeButtonClicked();
          }}
        >
          Get a joke
        </Button>
        <Button
          disabled={isJokeLoading}
          onClick={e => {
            e.preventDefault();
            requestJokeWithIntervalButtonClicked();
          }}
        >
          {isTimerRunning ? (
            <>
              <IconContainer>
                <PauseIcon />
              </IconContainer>
              Turn the jokes off
            </>
          ) : (
            <>
              <IconContainer>
                <PlayIcon />
              </IconContainer>
              Turn the jokes on
            </>
          )}
        </Button>

        <Link to={'/favouriteJokes'}>
          <Button>Favourite jokes</Button>
        </Link>
      </Buttons>
      {/*{jokeToDisplay && !isJokeLoading ? <div>{jokeToDisplay.value}</div> : null}*/}
    </JokesContainer>
  );
};

const JokesContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-bottom: 40px;
  margin-top: 40px;
  justify-self: flex-end;

  a {
    display: block;
    color: inherit;
    text-decoration: inherit;
    width: 100%;
  }
`;

const ChuckNorrisImg = styled.div`
  img {
    max-width: 300px;
    max-height: 300px;
  }
`;

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export default Jokes;
