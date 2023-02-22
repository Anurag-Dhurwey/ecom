import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatePrice from "./FormatePrice";

const Product = ({ decider, faturedProducts, classView }) => {
  const { ViewLocation, list_GridView ,HomeLocation} = classView;
  const productList = faturedProducts.length ? faturedProducts : [];

  return (
    <div>
      <Wrapper>
        <div
          className={ViewLocation ? (list_GridView ? "grid" : "list") : ViewLocation?"grid":"d-flex"}
        >
          {decider
            ? productList.map((item, i) => {
                return (
                  <div className={list_GridView?"item":HomeLocation?"item":"flex-item"} key={i}>
                    {list_GridView ? (
                      <>
                        <figure>
                          <NavLink to={`/singleproduct/${item.id}`}>
                            <img
                              src={item.image}
                              className={HomeLocation ? "Img" : "PImg"}
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
                    ) : !HomeLocation?(
                      <>
                        <figure className="figure">
                          <NavLink to={`/singleproduct/${item.id}`}>
                            <img
                              src={item.image}
                              className={list_GridView ? "Img" : "PImg"}
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
                    ):(
                      <>
                        <figure>
                          <NavLink to={`/singleproduct/${item.id}`}>
                            <img
                              src={item.image}
                              className={HomeLocation ? "Img" : "PImg"}
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

  .d-flex{
    display: flex;
    justify-content: center;
  }
  .Img {
    width: 200px;
  }
  .PImg {
    width: 300px;
  }
  .item {
    margin: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding-top:50px;
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
