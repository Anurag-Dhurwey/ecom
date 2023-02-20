import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterProductsContext";
import Product from "../Components/Product";
const Products = () => {
const {Fstate}=useFilterContext()
const {isData,filteredProducts,products}=Fstate
const decider=products.length?true:false


  return <Wrapper>
   {isData? <div className="grid-filter-column">
      <div className="filter">
          <p> pthis ia paragraph pthis ia paragraph pthis ia paragraph</p>
      </div>
      <div className="products">
      <Product classes={""} decider={decider} faturedProducts={products} />
      </div>
    </div>:<p>Loading</p>}
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    display: grid;
    grid-template-columns:0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
