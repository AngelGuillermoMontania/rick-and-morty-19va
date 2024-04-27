import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const [allFavorites, setAllFavorites] = useState(null); // EN SOLUCION 1 --> null  || EN SOLUCION 2 ---> []

  /* MONTAJE */
  useEffect(() => {
    const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesLS) {
      setAllFavorites(favoritesLS);
    }
  }, []);

  /* ACTUALIZACION */
  useEffect(() => {
    // SOLUCION 1
    if (allFavorites !== null) {
      // SOLUCION 1
      localStorage.setItem("favorites", JSON.stringify(allFavorites)); // SOLUCION 1
    } // SOLUCION 1
  }, [allFavorites]); // SOLUCION 1

  const addFavorite = (favorite) => {
    /* localStorage.setItem("favorites", JSON.stringify([...allFavorites, favorite])) */ // SOLUCION 2
    setAllFavorites([...allFavorites, favorite]);
  };

  const removeFavorite = (id) => {
    const newFavorites = allFavorites.filter((favorite) => favorite.id !== id);
    setAllFavorites(newFavorites);
    /* localStorage.setItem("favorites", JSON.stringify(newFavorites)) */ // SOLUCION 2
  };

  const isFavorite = (id) => {
    const exist = allFavorites.some((character) => character.id === id);
    return exist;
  };

  const totalFavorites = () => {
    return allFavorites?.length;
  };

  const data = {
    allFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    totalFavorites,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
}
