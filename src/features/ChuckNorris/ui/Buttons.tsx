import { Button } from '../../../shared/ui/Button';
import {
  $isTimerRunning,
  requestJokeButtonClicked,
  requestJokeWithIntervalButtonClicked,
  requestRandomJokeFx,
} from '../model';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { TimerIcon } from './TimerIcon';

export const Buttons = () => {
  const isJokeLoading = useStore(requestRandomJokeFx.pending);

  const requestJokeButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    requestJokeButtonClicked();
  };

  const requestJokeWithIntervalButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    requestJokeWithIntervalButtonClicked();
  };

  return (
    <ButtonsContainer>
      <Button disabled={isJokeLoading} onClick={requestJokeButtonHandler}>
        Get a joke
      </Button>
      <Button disabled={isJokeLoading} onClick={requestJokeWithIntervalButtonHandler}>
        <TimerIcon />
      </Button>

      <Link to={'/favouriteJokes'}>
        <Button>Favourite jokes</Button>
      </Link>
    </ButtonsContainer>
  );
};

const ButtonsContainer = styled.div`
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
