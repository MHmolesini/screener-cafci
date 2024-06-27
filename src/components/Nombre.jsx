import React from "react";
import "../styles/components/Nombre.css";

const Nombre = ({ fondo }) => {
  console.log(fondo);
  return (
    <>
      <div className="Nombre">
        {fondo ? (
          <>
            <h1>{fondo.nombre}</h1>
          </>
        ) : (
          <p>No hay fondo seleccionado</p>
        )}
      </div>
    </>
  );
};

export default Nombre;
