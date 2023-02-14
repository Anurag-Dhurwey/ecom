import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";
export const Context=createContext();

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    faturedProducts:[],
    singleProduct:{}
}

export const GlobleContext=({children})=>{

    const [state,dispatch]=useReducer(ProductReducer,initialState)
    console.log(state)
 
    const getProduct=async(api)=>{
        dispatch({type:"Api_Loading"})
        try {
            let productsArr=await axios.get(api);
            dispatch({type:"Set_Api",payload:productsArr.data})
        } catch (error) {
            dispatch({type:"Api_Error"})
        }
    }
   
    const GetSingleProduct=async(api)=>{

        dispatch({type:"Api_Single_Loading"})
        try {
            let singleProduct=await axios.get(api);
            dispatch({type:"Set_Single_Api",payload:singleProduct.data})
        } catch (error) {
            dispatch({type:"Api_SIngle_Error"})
        }
    }
    const dataBaseUrl=process.env.REACT_APP_Data_Base_url;
    useEffect(()=>{
        getProduct(dataBaseUrl)
        // eslint-disable-next-line
    },[])

    return <Context.Provider value={{state,GetSingleProduct}}>{children}</Context.Provider>
}

export const useGlobleContext=()=>{
    return useContext(Context)
}