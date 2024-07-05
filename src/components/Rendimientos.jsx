import React from "react";
import '../styles/components/Rendimientos.css';

const Rendimientos = ({ rendimientos }) => {
  // Verificar si rendimientos está definido y tiene la estructura esperada
  if (!rendimientos) return null; // O puedes mostrar un mensaje que indique que no hay datos

  return (
    <>
      <div className='Rendimientos'>
        <div className="Rendimientos_Componente">
          <div className="Rendimientos_title">
            <p>Rendimientos</p>
          </div>
          <div className="Rendimientos_cuerpo">
            <div className="Rendimientos_item">
              <p>Últimos 7 días: {rendimientos.last7Days ? rendimientos.last7Days.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item"> 
              <p>Del mes: {rendimientos.currentMonth ? rendimientos.currentMonth.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Últimos 30 días: {rendimientos.last30Days ? rendimientos.last30Days.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Últimos 60 días: {rendimientos.last60Days ? rendimientos.last60Days.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Acumulado del año: {rendimientos.yearToDate ? rendimientos.yearToDate.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Últimos 12 meses: {rendimientos.last12Months ? rendimientos.last12Months.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Año anterior: {rendimientos.previousYear ? rendimientos.previousYear.rendimiento : <></>}</p>
            </div>

            <div className="Rendimientos_item">
              <p>Últimos 2 años: {rendimientos.last2Years ? rendimientos.last2Years.rendimiento : <></>}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rendimientos;
