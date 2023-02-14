import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Comps/Home";
import About from "./Comps/About";
import Contact from "./Comps/Contact";
import Products from "./Comps/Products";
import Cart from "./Comps/Cart";
import SingleProduct from "./Comps/SingleProduct";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
const App = () => {
  const theme = {
    colors: {
      bg: "#fff",
      heading: "",
    },
    media: {
      tab: "",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <MTAuto>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </MTAuto>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

const Wrapper = styled.div`
  margin: 0 9rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MTAuto = styled.div`
  margin-bottom: auto;
`;
export default App;
