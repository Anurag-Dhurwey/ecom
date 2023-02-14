import React from "react";
import styled from "styled-components";
import Product from "../Components/Product";


const Home = () => {

  return (
    <Wrapper>
      <Product/>
    </Wrapper>
  );
};


const Wrapper=styled.div`padding-top: 50px;`


export default Home;
