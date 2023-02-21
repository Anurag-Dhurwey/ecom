import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useGlobleContext } from "./GlobleContext";
import reducer from "../Reducer/MainProductReducer";
const FilterContext = createContext();

const FilterProductsContext = ({ children }) => {
  const { state } = useGlobleContext();
  const { products } = state;
  const initialState = {
    products: [],
    filteredProducts: [],
    isData: false,
    sort_value: "",
  };

  const [Fstate, dispatch] = useReducer(reducer, initialState);

  const sortMethod = () => {
    dispatch({ type: "sortingMethod",payload:products});
  };


  useEffect(() => {
    dispatch({ type: "sorted_product", payload: products });
  },[Fstate.sort_value]);


  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
  }, [products]);

  const [list_GridView, setList_grid] = useState(true);
  return (
    <FilterContext.Provider
      value={{ Fstate, list_GridView, setList_grid, sortMethod }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProductsContext;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
