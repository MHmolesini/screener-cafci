import React, { useState } from "react";
import '../styles/pages/Fondo.css';
import { getFicha } from "../services/ficha";
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
  const [selectedFondo, setSelectedFondo] = useState(null);

  // Función para manejar la selección de un fondo
  const handleSelectFondo = async (fondoId, claseId) => {
    try {
      const { data } = await getFicha(fondoId, claseId);
      setSelectedFondo(data);
      console.log("Fondo, data: ", data)
    } catch (error) {
      console.error("Error al obtener los detalles del fondo:", error);
    }
  };

  return (
    <>
      <div className="fondo">
        <Nombre fondo={selectedFondo}/>  {/* fondo={selectedFondo} */}
        <Buscador onSelectFondo={handleSelectFondo}/> {/* onSelectFondo={handleSelectFondo} */}
        <Precio fondo={selectedFondo}/>
        <DatosFondo fondo={selectedFondo}/>
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
