import React from 'react';
import {useStore} from "effector-react";
import {$jokeToDisplay, requestJokeButtonClicked} from "../models";

const Jokes = () => {
    const jokeToDisplay = useStore($jokeToDisplay)
 return (
  <div>
   <button onClick={() => requestJokeButtonClicked()}>Получить шутку</button>
      {jokeToDisplay ? <div>{jokeToDisplay.value}</div> : null}
  </div>
 );
};

export default Jokes ;