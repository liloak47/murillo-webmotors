import React from "react";
import "./style.scss";

const SearchCar = () => {
  return (
    <div className="box-search">
      <div className="type-movel">
        <div className="choice">
          <input type="checkbox" name="new" value="new" />
          <label htmlFor="new">New</label>
        </div>
        <div className="choice">
          <input type="checkbox" name="used" value="used" />
          <label htmlFor="used">Usados</label>
        </div>
      </div>
    </div>
  );
};

export default SearchCar;
