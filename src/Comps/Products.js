import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterProductsContext";
import {  useLocation } from "react-router-dom";
import Product from "../Components/Product";
import Filter from "../Components/Filter";
const Products = () => {
const {Fstate,list_GridView,setList_grid,sortMethod ,filterMethod,category}=useFilterContext()
const {isData,products,filteredProducts}=Fstate
const decider=products.length?true:false
const {pathname}=useLocation()
const ViewLocation=pathname==='/products'?true:false

  return <Wrapper>
   {isData? <div className="grid-filter-column">
      <div className="filter">
          <Filter filter={{filterMethod,category}}/>
      </div>
     <div>
      <div className="product_nave">
         <div style={{cursor:"pointer"}} className="list_view" onClick={()=>{setList_grid(false)}}><h3 >List View</h3></div>
         <div style={{cursor:"pointer"}} className="grid_view"><h3  onClick={()=>{setList_grid(true)}}>Grid View</h3></div>
         <div > 
          <form action="#">
            <label htmlFor="sort">Sort by</label>
            <select name="sort" id="sort" onChange={sortMethod}>
              <option value="featured">Featured</option>
              <option value="higest">High to Low</option>
              <option value="lowest"> Low to High </option>
              <option value="a_z">A to Z</option>
              <option value="z_a">Z to A</option>
            </select>
          </form>
         </div>
      </div>
     <div className="products">
      <Product classView={{ViewLocation,setList_grid,list_GridView}}  decider={decider} faturedProducts={filteredProducts} />
      </div>
     </div>
    </div>:<p>Loading</p>}
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    display: grid;
    grid-template-columns:0.2fr 1fr;
  }
  .product_nave{
    display: flex;
    justify-content:space-around;

  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
