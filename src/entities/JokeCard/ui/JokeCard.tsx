import {
  $favouriteJokes,
  favouriteButtonClicked,
  JokeType,
} from '../../../features/ChuckNorris/model';
import React from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { FavouriteStar } from './FavouriteStar';
import { Button } from '../../../shared/ui/Button';

export const JokeCard = ({ joke }: { joke: JokeType }) => {
  const favouriteJokes = useStore($favouriteJokes);
  const isFavourite = favouriteJokes?.find(el => el.id === joke.id) !== undefined;

  return (
    <Card>
      <Avatar>
        <img src={joke.icon_url} alt="" />
      </Avatar>
      <JokeText>{joke.value}</JokeText>
      <CardButton onClick={() => favouriteButtonClicked(joke)}>
        <FavouriteStar isFavourite={isFavourite} />
        <div>{isFavourite ? 'Remove from favourites' : 'Add to favourites'}</div>
      </CardButton>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 268px;
  align-items: center;

  position: relative;
  max-width: 300px;
  box-shadow: 0px 4px 8px rgba(128, 157, 214, 0.16), 0px 8px 32px rgba(128, 157, 214, 0.25);
  color: #4d4d4d;
  padding: 32px 24px 16px 24px;
`;

const Avatar = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
`;

const JokeText = styled.p`
  text-align: center;
`;

const CardButton = styled(Button)`
  margin-top: auto;

  & svg {
    margin-right: 4px;
  }
`;
