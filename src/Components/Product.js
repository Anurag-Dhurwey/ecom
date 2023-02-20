import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useGlobleContext } from "../Context/GlobleContext";
import FormatePrice from "./FormatePrice";

const Product = () => {
  const { state } = useGlobleContext();
  const { faturedProducts } = state;
  const productList=faturedProducts.length?faturedProducts:"this"
  console.log(productList)
  return (
    <div>
      <Wrapper>
        {faturedProducts.map((item, i) => {
          return (
            <div className="item" key={i}>
              <figure>
                <NavLink to={`/singleproduct/${item.id}`}><img src={item.image} width="300px" alt="product"/></NavLink>
              </figure>
              <div className="itemdetails">
                <h3>{item.name}</h3>
                <FormatePrice price={item.price}/>
              </div>
              <p className="desc">{item.description}</p>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
display: flex;
justify-content: center;
    align-items: center;
.item{
    margin:5px;
    display: flex;
justify-content: center;
    align-items: center;
    flex-direction: column;
}
.itemdetails{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.desc{
    text-align: center;
}
`;

export default Product;
