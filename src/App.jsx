import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Design from "./Components/Design";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import Price from "./Components/Price";
import Product from "./Components/Product";
import Quality from "./Components/Quality";
const App = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <Quality />
      <Design />
      <Product />
      <Review />
      <Price />
      <Footer />
    </>
  );
};

export default App;
