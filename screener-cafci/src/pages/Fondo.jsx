import React from "react";
import '../styles/pages/Fondo.css';
import Nombre from "../components/Nombre";
import Buscador from "../components/Buscador";
import Precio from "../components/Precio";
import DatosFondo from "../components/DatosFondo";
import Rendimientos from "../components/Rendimientos";
import Sociedad from "../components/Sociedad";
import GraficoRendimientosMensuales from "../components/GraficoRendimientosMensuales";
import GraficoEvolucionPrecio from "../components/GraficoEvolucionPrecio";
import Honorarios from "../components/Honorarios";
import GraficoPonderacionActivos from "../components/GraficoPonderacionActivos";
import TablaActivos from "../components/TablaActivos";

const Fondo = () => {
  return (
    <>
      <div className="fondo">
        <Nombre />
        <Buscador />
        <Precio />
        <DatosFondo />
        <Rendimientos />
        <Sociedad />
        <GraficoRendimientosMensuales />
        <GraficoEvolucionPrecio />
        <Honorarios />
        <GraficoPonderacionActivos />
        <TablaActivos />
      </div>
    </>
  );
};

export default Fondo;
