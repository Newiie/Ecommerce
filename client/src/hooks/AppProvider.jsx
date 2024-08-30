/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();
  
export const useApp = () => {
    const context = useContext(AppContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside ContextProvider");
  }
  return context;
}

const ContextProvider = ({ children }) => {
    const [userId, SetUserId] = useState("")
    const [cartData, setCartData] = useState([])
    const [products, setProducts] = useState({});
    const [SubTotalPrice, setSubtotalPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const contextValue = {
        userId,
        cartData,
        products,
        SubTotalPrice,
        setSubtotalPrice,
        totalPrice,
        setTotalPrice,
        setCartData,
        setProducts,
        SetUserId
    }

    return (
        <AppContext.Provider value={contextValue}>
          {children}
        </AppContext.Provider>
      );
};

export default ContextProvider;  