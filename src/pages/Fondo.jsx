import React, { useState } from "react";
import '../styles/pages/Fondo.css';
import { getFicha } from "../services/ficha";
import { getRendimientos } from "../services/rendimiento";
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
  const [rendimientos, setRendimientos] = useState({});

  // Función para manejar la selección de un fondo
  const handleSelectFondo = async (fondoId, claseId) => {
    try {
      const { data } = await getFicha(fondoId, claseId);
      setSelectedFondo(data);

      const today = new Date();
      const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
      };

      const calculateDates = () => {
        const dates = {
          last7Days: new Date(today),
          currentMonth: new Date(today.getFullYear(), today.getMonth(), 1),
          last30Days: new Date(today),
          last60Days: new Date(today),
          yearToDate: new Date(today.getFullYear(), 0, 1),
          last12Months: new Date(today),
          lastYear: new Date(today.getFullYear() - 1, 0, 1),
          last2Years: new Date(today.getFullYear() - 2, 0, 1)
        };

        dates.last7Days.setDate(today.getDate() - 7);
        dates.last30Days.setDate(today.getDate() - 30);
        dates.last60Days.setDate(today.getDate() - 60);
        dates.last12Months.setFullYear(today.getFullYear() - 1);

        for (let key in dates) {
          dates[key] = formatDate(dates[key]);
        }

        return dates;
      };

      const dates = calculateDates();

      const responses = await Promise.all([
        getRendimientos(fondoId, claseId, dates.last7Days, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.currentMonth, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.last30Days, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.last60Days, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.yearToDate, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.last12Months, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.lastYear, formatDate(today)),
        getRendimientos(fondoId, claseId, dates.last2Years, formatDate(today))
      ]);

      const rendimientosData = {
        last7Days: responses[0],
        currentMonth: responses[1],
        last30Days: responses[2],
        last60Days: responses[3],
        yearToDate: responses[4],
        last12Months: responses[5],
        lastYear: responses[6],
        last2Years: responses[7],
      };

      setRendimientos(rendimientosData);

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
        <Rendimientos rendimientos={rendimientos} />
        <Sociedad fondo={selectedFondo}/>
        <GraficoRendimientosMensuales />
        <GraficoEvolucionPrecio />
        <Honorarios fondo={selectedFondo}/>
        <GraficoPonderacionActivos />
        <TablaActivos />
      </div>
    </>
  );
};

export default Fondo;
