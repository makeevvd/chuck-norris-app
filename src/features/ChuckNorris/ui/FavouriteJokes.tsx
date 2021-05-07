import { useStore } from 'effector-react';
import { $favouriteJokes, clearFavouriteJokesButtonClicked } from '../model';
import React from 'react';
import { JokeCard } from '../../../entities/JokeCard/ui/JokeCard';
import styled from 'styled-components';
import { Button } from '../../../shared/ui/Button';

export const FavouriteJokes = () => {
  const favouriteJokes = useStore($favouriteJokes);

  const favouriteJokesElems = favouriteJokes.map(joke => <JokeCard joke={joke} />);

  const clearButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    clearFavouriteJokesButtonClicked();
  };

  return (
    <FavouriteContainer>
      <ClearButton disabled={favouriteJokes.length === 0} onClick={clearButtonHandler}>
        Clear favourite jokes list
      </ClearButton>
      {favouriteJokesElems.length ? (
        <JokesContainer>{favouriteJokesElems}</JokesContainer>
      ) : (
        <div>There are no favourite jokes yet</div>
      )}
    </FavouriteContainer>
  );
};

const FavouriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 32px;
`;

const JokesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  row-gap: 48px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const ClearButton = styled(Button)`
  margin-bottom: 80px;

  &:disabled {
    margin-bottom: 40px;
  }
`;
