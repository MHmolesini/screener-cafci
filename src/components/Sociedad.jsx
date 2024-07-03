import React, { useEffect, useState } from "react";
import "../styles/components/Sociedad.css";

const Sociedad = ({ fondo }) => {
  const [fechaInicio, setFechaInicio] = useState(null);
  const [objetivo, setObjetivo] = useState(null);
  const [gerente, setGerente] = useState(null);
  const [depositaria, setDepositaria] = useState(null);
  const [idGerente, setIdGerente] = useState(null);
  const [imagenSrc, setImagenSrc] = useState(null);

  useEffect(() => {
    if (fondo && fondo.model) {
      const fechaISO = new Date(fondo.model.fondo.inicio);
      setFechaInicio(fechaISO.toLocaleDateString("es-AR"));
      setObjetivo(fondo.model.fondo.objetivo);
      setGerente(fondo.model.fondo.gerente.nombre);
      setDepositaria(fondo.model.fondo.depositaria.nombre);
      setIdGerente(fondo.model.fondo.gerente.id);
    }
  }, [fondo]);

  useEffect(() => {
    if (idGerente) {
      try {
        const imgSrc = require(`../images/fondos/gerente/${idGerente}.png`);
        setImagenSrc(imgSrc);
      } catch (error) {
        setImagenSrc(null);
      }
    }
  }, [idGerente]);

  return (
    <>
      <div className="Sociedad">
        <div className="Sociedad_componente">
          <div className="Sociedad_bloque">
            <p className="title">Fecha de inicio:</p>
            <p>{fechaInicio}</p>
          </div>

          <div className="Sociedad_bloque">
            <p className="title">Objetivo</p>
            <p>{objetivo}</p>
          </div>

          <div className="Sociedad_bloque">
            <div>
              <p className="title">Sociedad Gerente</p>
              {imagenSrc && (
                <img src={imagenSrc} alt={`Gerente ${idGerente}`} />
              )}
              <p>{gerente}</p>
            </div>
            <div>
              <p className="title">Sociedad Depositaria</p>
              <img src="" alt="" />
              <p>{depositaria}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sociedad;
