import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({}); // this is the meal selected cart

  //add item in card function
  const addToCart = (itemId) => {
    // if it adding for the first time
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // if there is already item in the cart item id is more the one

      //This code updates a state object called cardItems by incrementing the value associated with a specific itemId. It uses the previous state (prev), copies its properties, and modifies only the itemId's value while keeping the rest unchanged.
      setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  //remove from card
  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
