import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../Context/FilterProductsContext";
const Products = () => {
const {Fstate}=useFilterContext()
const {isData,filteredProducts,products}=Fstate
  return <Wrapper>
   {isData? <div className="grid-filter-column">
      <div className="filter">
          <p> pthis ia paragraph</p>
      </div>
      <div className="products">
      <p> pthis ia paragraph</p>
      </div>
    </div>:<p>Loading</p>}
  </Wrapper>;
};

const Wrapper = styled.section`
  .grid-filter-column {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
