import { PauseIcon } from '../../../entities/JokeCard/ui/PauseIcon';
import { PlayIcon } from '../../../entities/JokeCard/ui/PlayIcon';
import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isTimerRunning } from '../model';

export const TimerIcon = () => {
  const isTimerRunning = useStore($isTimerRunning);

  return (
    <>
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
    </>
  );
};

const IconContainer = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
