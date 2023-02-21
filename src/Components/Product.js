import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatePrice from "./FormatePrice";

const Product = ({ decider, faturedProducts, classView }) => {
  const { ViewLocation, list_GridView } = classView;
  const productList = faturedProducts.length ? faturedProducts : [];

  return (
    <div>
      <Wrapper>
        <div
          className={ViewLocation ? (list_GridView ? "grid" : "list") : "grid"}
        >
          {decider
            ? productList.map((item, i) => {
                return (
                  <div className={list_GridView?"item":"flex-item"} key={i}>
                    {list_GridView ? (
                      <>
                        <figure>
                          <NavLink to={`/singleproduct/${item.id}`}>
                            <img
                              src={item.image}
                              id={!list_GridView ? "PImg" : "Img"}
                              alt="product"
                            />
                          </NavLink>
                        </figure>
                        <div className="itemdetails">
                          <h3>{item.name}</h3>
                          <FormatePrice price={item.price} />
                        </div>
                        <p className="desc">
                          {item.description.slice(0, 100)}.....
                        </p>
                      </>
                    ) : (
                      <>
                        <figure className="figure">
                          <NavLink to={`/singleproduct/${item.id}`}>
                            <img
                              src={item.image}
                              id={!list_GridView ? "PImg" : "Img"}
                              alt="product"
                            />
                          </NavLink>
                        </figure>
                        <div className="">
                          <div className="itemdetails">
                            <h3>{item.name}</h3>
                            <FormatePrice price={item.price} />
                          </div>
                          <p className="desc">
                            {item.description.slice(0, 100)}.....
                          </p>
                        </div>
                      </>
                    )}
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
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0rem;
  }

  .list {
    grid-template-columns: 1fr;
    gap: 0rem;
  }
  #Img {
    width: 200px;
  }
  #PImg {
    width: 300px;
  }
  .item {
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  .flex-item{
    display:grid;
    grid-template-columns:0.8fr 1fr;
    gap: 0rem;
    padding-top:50px;
    padding-left: 100px;
    padding-right: 100px;
  }
  .figure{
    display: flex;
    justify-content: center;
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
