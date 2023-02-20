import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useGlobleContext } from './GlobleContext'
import  reducer  from '../Reducer/MainProductReducer'
const FilterContext=createContext()

const FilterProductsContext = ({children}) => {
    const {state }=useGlobleContext()
    const {products}=state
const initialState={
   products:[],
   filteredProducts:[],
   isData:false
}

const [Fstate,dispatch]=useReducer(reducer,initialState)
useEffect(()=>{
   dispatch({type:"GET_ALL_PRODUCTS",payload:products})
},[products])


  return (
    <FilterContext.Provider value={{Fstate}}>{children}</FilterContext.Provider>
  )
}

export default FilterProductsContext

export const useFilterContext=()=>{
    return useContext(FilterContext)
}

