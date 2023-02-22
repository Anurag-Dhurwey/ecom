import React  from "react";
import styled from "styled-components";
import Product from "../Components/Product";
import { useFilterContext } from "../Context/FilterProductsContext";
import { useGlobleContext } from "../Context/GlobleContext";
import { useLocation } from "react-router-dom";

const Home = () => {
  const {state}=useGlobleContext()
  const { faturedProducts } = state;
  const decider=faturedProducts.length?true:false
  const {list_GridView,setList_grid }=useFilterContext()
  const {pathname}=useLocation()
  const ViewLocation=pathname==='/products'?true:false
  const HomeLocation=pathname==="/"?true:false

  return (
    <Wrapper>
      <Product classView={{ViewLocation,setList_grid,list_GridView,HomeLocation}}  decider={decider} faturedProducts={faturedProducts} />
    </Wrapper>
  );
};


const Wrapper=styled.div`padding-top: 50px;`


export default Home;
