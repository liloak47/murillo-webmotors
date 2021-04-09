import React from "react";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import SearchCar from "../../components/SearchCar";
import PurchaseType from "../../components/PurchaseType";
import ListCars from "../../components/ListCars";
import { Container } from "../../global";
const Home = () => {
  return (
    <div>
      <Header />
      <Slide />
      <Container>
        <PurchaseType />
        <SearchCar />
        <ListCars />
      </Container>
    </div>
  );
};

export default Home;
