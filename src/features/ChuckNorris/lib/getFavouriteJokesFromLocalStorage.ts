export const getFavouriteJokesFromLocalStorage = () => {
  const valueInLocalStorage = window.localStorage.getItem('favouriteJokes');
  if (valueInLocalStorage) {
    return JSON.parse(valueInLocalStorage);
  }
  return [];
};
