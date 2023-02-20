import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatePrice from "./FormatePrice";

const Product = ({ decider, faturedProducts }) => {
  const productList = faturedProducts.length ? faturedProducts : [];
  console.log(productList);
  return (
    <div>
      <Wrapper>
        <div className="grid">
          {decider
            ? productList.map((item, i) => {
                return (
                  <div className="item" key={i}>
                    <figure>
                      <NavLink to={`/singleproduct/${item.id}`}>
                        <img src={item.image} width="200px" alt="product" />
                      </NavLink>
                    </figure>
                    <div className="itemdetails">
                      <h3>{item.name}</h3>
                      <FormatePrice price={item.price} />
                    </div>
                    <p className="desc">
                      {item.description.slice(0, 100)}.....
                    </p>
                  </div>
                );
              })
            : "Loading"}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
   .grid{
       grid-template-columns: 1fr 1fr 1fr;
       gap: 0rem;
   }

  .item {
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .itemdetails {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .desc {
    text-align: center;
  }
`;

export default Product;
