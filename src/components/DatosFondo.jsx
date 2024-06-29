import React from "react";
import '../styles/components/DatosFondo.css';
import Search from "../images/icons/mundo.png";

const DatosFondo = ({fondo}) => {
  console.log(fondo, fondo?.model);

  let tipo_de_fondo = null;
  let moneda = null;
  let clasificacion = null;
  let region = null;
  let benchmark = null;
  let horizonte = null;
  let duracion = null;

  if (fondo && fondo.model) {
    tipo_de_fondo = fondo.model.fondo.tipoFondo.nombre;
    moneda = fondo.model.fondo.moneda.nombre;
    clasificacion = fondo.model.fondo.tipoRenta.nombre;
    region = fondo.model.fondo.region.nombre;
    benchmark = fondo.model.fondo.benchmark.nombre; 
    horizonte = fondo.model.fondo.horizonte.nombre; 
    duracion = fondo.model.fondo.duration.nombre;
  }

  return (
    <>
      <div className='DatosFondo'>
        <div className="DatosFondo_Componente">
          <div className="DatosFondo_title">
            <p>Datos del fondo</p>
          </div>
          <div className="DatosFondo_cuerpo">
            <div className="DatosFondo_item">
              <img src={Search} alt="" />
              <p>Tipo de fondo: {tipo_de_fondo}</p>
            </div>

            <div className="DatosFondo_item"> 
              <img src="" alt="" />
              <p>Moneda: {moneda}</p>
            </div>

            <div className="DatosFondo_item">
              <img src="" alt="" />
              <p>Clasificación: {clasificacion}</p>
            </div>

            <div className="DatosFondo_item">
              <img src={Search} alt="" />
              <p>Región: {region}</p>
            </div>

            <div className="DatosFondo_item">
              <img src="" alt="" />
              <p>Benchmark: {benchmark}</p>
            </div>

            <div className="DatosFondo_item">
              <img src="" alt="" />
              <p>Horizonte: {horizonte}</p>
            </div>

            <div className="DatosFondo_item">
              <img src="" alt="" />
              <p>Duración: {duracion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosFondo;
