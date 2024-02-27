const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_FAVOURITELIST":
      return {
        ...state,
        favouritelistproducts: [...state.favouritelistproducts, action.payload],
      };
    case "REMOVE_PRODUCT_FROM_FAVOURITELIST":
      return {
        ...state,
        favouritelistproducts: state.favouritelistproducts.filter(
          (product) => product._id !== action.payload
        ),
      };
    case "ADD_TO_SHOPPING_BAG":
      // Ajouter la logique pour ajouter un produit au panier
      return {
        ...state,
        shoppingBag: [...state.shoppingBag, action.payload],
      };
    case "REMOVE_FROM_SHOPPING_BAG":
      // Assurez-vous que la propriété _id est correcte
      return {
        ...state,
        shoppingBag: state.shoppingBag.filter((product) => product._id !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
