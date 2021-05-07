import { useStore } from 'effector-react';
import {
  $isTimerRunning,
  $jokeToDisplay,
  MainPageGate,
  requestJokeButtonClicked,
  requestJokeWithIntervalButtonClicked,
  requestRandomJokeFx,
} from '../model';

import React from 'react';
import { JokeCard } from '../../../entities/JokeCard/ui/JokeCard';
import { useInterval } from '../lib/useInterval';
import styled from 'styled-components';
import { Buttons } from './Buttons';
import { JokeFallback } from './JokeFallback';

const Jokes = () => {
  const delay = 3000;
  const isTimerRunning = useStore($isTimerRunning);

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
    <>
      <MainPageGate />
      <JokesContainer>
        <div>{jokeToDisplay && !isJokeLoading ? <JokeCard joke={jokeToDisplay} /> : null}</div>
        {isJokeLoading ? <JokeFallback /> : null}
        <Buttons />
      </JokesContainer>
    </>
  );
};

const JokesContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Jokes;
