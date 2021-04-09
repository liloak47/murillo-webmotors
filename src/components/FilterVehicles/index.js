import React, { useState, useEffect } from "react";
import api from "../../services/api";
import "./style.scss";
import CardCars from "../CardCars";
// import { Container } from './styles';

const FilterVehicles = ({ nameMark, selectedModel }) => {
  const [cars, setCars] = useState([]);
  const [carsFiltred, setCarsFiltred] = useState([]);

  console.log(nameMark);

  console.log(selectedModel);
  const handleFilterCar = async (
    selectedCars,
    count = 1,
    carsIncludes = []
  ) => {
    if (count) {
      await api.get(`/Vehicles?Page=${count}`).then((resp) => {
        count = resp.data.length === 0 ? false : count + 1;
        if (selectedModel === "") {
          const carsFilter = resp.data.filter((cars) => cars.Make === nameMark);
          console.log(carsFilter);
          carsIncludes = [...carsFilter, ...carsIncludes];
        }
        const carsFilter = resp.data.filter(
          (cars) => cars.Make === nameMark && cars.Model === selectedModel
        );

        console.log(carsFilter);
        carsIncludes = [...carsFilter, ...carsIncludes];
      });
      return handleFilterCar(selectedCars, count, carsIncludes);
    } else {
      return setCarsFiltred(carsIncludes);
    }
  };
  console.log(carsFiltred);
  useEffect(() => {
    handleFilterCar();
  }, [nameMark, selectedModel]);
  return (
    <div className="container">
      {carsFiltred.map((vehicle, index) => (
        <CardCars
          key={index}
          make={vehicle.Make}
          model={vehicle.Model}
          version={vehicle.Version}
          image={vehicle.Image}
          price={vehicle.Price}
          km={vehicle.KM}
          yearFab={vehicle.YearFab}
          yearModel={vehicle.YearModel}
          color={vehicle.Color}
        />
      ))}
    </div>
  );
};

export default FilterVehicles;
