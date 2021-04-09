import React, { useState, useEffect } from "react";
import "./style.scss";
import api from "../../services/api";
import CardCars from "../CardCars";
// import { Container } from './styles';

const ListCars = () => {
  const [vehicles, SetVehicles] = useState([]);

  const getVehicles = async () => {
    await api.get("Vehicles?Page=1").then((resp) => {
      SetVehicles(resp.data);
      console.log(resp.data);
    });
  };
  useEffect(() => {
    getVehicles();
  }, []);
  return (
    <div>
      {vehicles.map((vehicle, index) => (
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

export default ListCars;
