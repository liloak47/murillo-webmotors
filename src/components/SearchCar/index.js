import React, { useState, useEffect } from "react";
import "./style.scss";
import SrcAdvanced from "../SrcAdvanced";
import services from "../../services/services";
import { Button } from "../../global/index";
import api from "../../services/api";
import years from "../../helpers/Years/index";
import FilterVehicles from "../FilterVehicles";

const SearchCar = () => {
  const [marks, setMarks] = useState([]);
  const [models, setModels] = useState([]);
  const [nameMark, setNameMark] = useState("");
  const [versions, setVersions] = useState([]);
  const [selectedMark, setSelectedMark] = useState(0);
  const [selectedModel, setSelectedModel] = useState("");
  const [showCarsFilters, setShowCharsFilters] = useState(false);

  const getMarks = async () => {
    try {
      const resp = await services.getMark();
      setMarks(resp);
    } catch {}
  };
  const getModels = async () => {
    try {
      const resp = await services.getModel(Number(selectedMark));
      setModels(resp);
    } catch {}
  };

  const getVersions = async (id) => {
    api.get(`/Version?ModelID=${1}`).then((resp) => {
      setVersions(resp.data);
    });
  };
  const getNameMark = () => {
    marks.filter((mark) =>
      mark.ID === Number(selectedMark) ? setNameMark(mark.Name) : null
    );
  };
  const clearFilter = () => {
    setSelectedModel("");
    setSelectedMark(0);
    setShowCharsFilters(false);
  };

  useEffect(() => {
    getMarks();
    getModels();
    getVersions();
    getNameMark();
  }, [selectedMark, selectedModel]);
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
      <div className="filters">
        <div className="group-inpt-src">
          <select name="" id="">
            <option value="fas fa-map-marker-alt">
              &#xf3c5; Onde : São Paulo - SP
            </option>
          </select>
          <div className="sub-group-inpt-src">
            <select name="" id="">
              <option select value="">
                Ano: Todos
              </option>
              {years.map((year, index) => (
                <option key={index} value={year.year}>
                  {year.year}
                </option>
              ))}
            </select>
            <select select name="" id="">
              <option value="">Faixa de Preço</option>
            </select>
          </div>
        </div>
        <div className="group-inpt-src">
          <div className="sub-group-inpt-src">
            <select
              value={selectedMark}
              onChange={(e) => setSelectedMark(e.target.value)}
              name="models"
              id="models"
              className=""
            >
              <option value={0} selected>
                Marca: Todas
              </option>
              {marks.map((mark, index) => (
                <option key={index} value={mark.ID}>
                  {mark.Name}
                </option>
              ))}
            </select>
            <select
              name=""
              id=""
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option selected value={0}>
                Modelo: Todas
              </option>
              {models.map((model, index) => (
                <option key={index} value={model.Name}>
                  {model.Name}
                </option>
              ))}
            </select>
          </div>
          <select name="" id="">
            <option selected value={0}>
              Versão: todas
            </option>
            {versions.map((version, index) => (
              <option key={index} value={version.Name}>
                {version.Name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="footer-form">
        <SrcAdvanced />
        <div className="group-btn-footer">
          <Button clear onClick={clearFilter}>
            Limpar filtros
          </Button>
          <Button onClick={() => setShowCharsFilters(true)}>VER OFERTAS</Button>
        </div>
      </div>
      {showCarsFilters === true ? (
        <FilterVehicles nameMark={nameMark} selectedModel={selectedModel} />
      ) : null}
    </div>
  );
};

export default SearchCar;
