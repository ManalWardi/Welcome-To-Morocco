// GlobalState.js

import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  favouritelistproducts: localStorage.getItem("favouritelistproducts")
    ? JSON.parse(localStorage.getItem("favouritelistproducts"))
    : [],
  shoppingBag: localStorage.getItem("shoppingBag")
    ? JSON.parse(localStorage.getItem("shoppingBag"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favouritelistproducts", JSON.stringify(state.favouritelistproducts));
  }, [state.favouritelistproducts]);

  useEffect(() => {
    localStorage.setItem("shoppingBag", JSON.stringify(state.shoppingBag));
  }, [state.shoppingBag]);

  // actions
  const addProductToFavouritelist = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_FAVOURITELIST", payload: product });
  };

  const removeProductFromFavouritelist = (id) => {
    dispatch({ type: "REMOVE_PRODUCT_FROM_FAVOURITELIST", payload: id });
  };

  const addToShoppingBag = (product) => {
    dispatch({ type: "ADD_TO_SHOPPING_BAG", payload: product });
  };

  const removeFromShoppingBag = (id) => {
    dispatch({ type: "REMOVE_FROM_SHOPPING_BAG", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouritelistproducts: state.favouritelistproducts,
        shoppingBag: state.shoppingBag,
        addProductToFavouritelist,
        removeProductFromFavouritelist,
        addToShoppingBag,
        removeFromShoppingBag,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
