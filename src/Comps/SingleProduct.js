import styled from "styled-components";
import { useGlobleContext } from "../Context/GlobleContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SingleProductImage from "../Components/SingleProductImage";
import FormatePrice from "../Components/FormatePrice";
import StarsRate from "../Components/StarsRate";
const SingleProduct = () => {
  const { id } = useParams();
  const { GetSingleProduct, state } = useGlobleContext();
  const { singleProduct } = state;
  const {
    name,
    price,
    description,
    reviews,
    stars,
    stock,
    image,
    company,
  } = singleProduct;

  const dataBaseUrl=process.env.REACT_APP_Data_Base_url;
  useEffect(() => {
    GetSingleProduct(`${dataBaseUrl}/${id}`);
    // eslint-disable-next-line
  }, []);
  return (
    <Wrapper>
      {singleProduct.name?(<div className="container">
        <div className="images">
          <SingleProductImage image={image} />
        </div>
        <div className="details">
          <h3>{name}</h3>
          <StarsRate stars={stars}/>
          <h3>{reviews}</h3>
          <FormatePrice price={price}/>
          <p>{description}</p>
          <p>{company}</p>
          <p>{stock}</p>
          <p></p>
        </div>
      </div>):<p>some thing went wrong</p>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
  grid-template-columns: 50% 50% ;
    padding: 9rem 0;
  }
  

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
