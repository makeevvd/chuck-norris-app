import React from 'react';
import Jokes from './features/ChuckNorris/ui/Jokes';
import './features/init';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FavouriteJokes } from './features/ChuckNorris/ui/FavouriteJokes';

export const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Titles>
          <TitleLink to={'/'}>Chuck Norris App</TitleLink>
        </Titles>
        <Switch>
          <Route path="/favouriteJokes">
            <FavouriteJokes />
          </Route>
          <Route path="/">
            <Jokes />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleLink = styled(Link)`
  color: #809dd6;
  font-size: 24px;
  font-weight: 700;
  &:visited {
    color: #809dd6;
  }
`;

const Titles = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
