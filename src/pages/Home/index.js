import React from "react";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import SearchCar from "../../components/SearchCar";
import { Container } from "../../global";
const Home = () => {
  return (
    <div>
      <Header />
      <Slide />
      <Container>
        <SearchCar />
      </Container>
    </div>
  );
};

export default Home;
