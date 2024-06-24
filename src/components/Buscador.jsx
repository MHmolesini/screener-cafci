import React from "react";
import "../styles/components/Buscador.css";
import Search from "../images/icons/Search.svg";

const Buscador = () => {
  return (
    <>
      <div className="Buscador">
        <div className="Buscador_interior">
          <div className="Icon">
            <img src={Search} alt="Search" />
          </div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </>
  );
};

export default Buscador;
