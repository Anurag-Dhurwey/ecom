import React from "react";
import styled from "styled-components";
import Product from "../Components/Product";
import { useGlobleContext } from "../Context/GlobleContext";


const Home = () => {
  const {state}=useGlobleContext()
  const { faturedProducts } = state;
  const decider=faturedProducts.length?true:false
  return (
    <Wrapper>
      <Product  decider={decider} faturedProducts={faturedProducts} />
    </Wrapper>
  );
};


const Wrapper=styled.div`padding-top: 50px;`


export default Home;
