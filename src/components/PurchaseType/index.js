import React, { useState } from "react";
import "./style.scss";
import { AiOutlineCar } from "react-icons/ai";
import { FaMotorcycle } from "react-icons/fa";
// import { Container } from './styles';

const PurchaseType = () => {
  const [toLeft, setToLeft] = useState("animation-btn-default");
  return (
    <div className="box-vehicle">
      <button
        autoFocus
        className="type-vehicle"
        onClick={() => setToLeft("animation-btn-default")}
      >
        <p>comprar</p>
        <h2 className={toLeft}>
          <AiOutlineCar />
          CARROS
        </h2>
        <hr className={toLeft} />
      </button>
      <button
        className="type-vehicle"
        onClick={() => setToLeft("animation-btn-left")}
      >
        <p>comprar</p>
        <h2>
          <FaMotorcycle />
          MOTOS
        </h2>
      </button>
    </div>
  );
};

export default PurchaseType;
