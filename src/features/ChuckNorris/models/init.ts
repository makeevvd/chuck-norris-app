import {$jokeToDisplay, requestJokeButtonClicked, requestRandomJokeFx} from "./index";
import {forward} from "effector";
import {requestRandomJoke} from "../../../api/jokes";


requestRandomJokeFx.use(requestRandomJoke)




forward({
    from: requestJokeButtonClicked,
    to: requestRandomJokeFx
})

$jokeToDisplay.on(requestRandomJokeFx.doneData, (_, joke) => joke);
