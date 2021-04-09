import React from "react";
import "./style.scss";
// import { Container } from './styles';

const CardCars = ({
  make,
  model,
  version,
  image,
  km,
  price,
  yearFab,
  yearModel,
  color,
}) => {
  return (
    <div className="card-vehicle">
      <figure>
        <img src={image} alt="" />
        <figcaption>
          <h3>{model}</h3>
        </figcaption>
      </figure>
      <ul>
        <li>Marca: {make}</li>
        <li>{version}</li>
        <li>Km: {km}</li>
        <li>Price: R${price}</li>
        <li>Ano Fabricação: {yearFab}</li>
        <li>Ano Modelo: {yearModel}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CardCars;
