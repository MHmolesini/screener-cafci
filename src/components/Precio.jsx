import React from "react";
import "../styles/components/Precio.css";

const Precio = ({ fondo }) => {
  console.log(fondo, fondo?.info);

  const calcularVariacionAbsoluta = (precioActual, rendimiento) => {
    const precioActualNumero = parseFloat(precioActual);
    const rendimientoNumero = parseFloat(rendimiento);

    const precioAnterior = precioActualNumero / (1 + rendimientoNumero / 100);
    const variacionAbsoluta = precioActualNumero - precioAnterior;

    return variacionAbsoluta.toFixed(2);
  };

  const formatearNumero = (numero) => {
    return new Intl.NumberFormat("es-AR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numero);
  };

  let precioActual = null;
  let rendimiento = null;
  let variacionAbsoluta = null;
  let rendimientoPositivo = null;
  let patrimonio = null;

  if (fondo && fondo.info) {
    precioActual = parseFloat(fondo.info.diaria.actual.vcpUnitario).toFixed(5);
    rendimiento = fondo.info.diaria.rendimientos.day.rendimiento;
    variacionAbsoluta = calcularVariacionAbsoluta(precioActual, rendimiento);
    rendimientoPositivo = parseFloat(rendimiento) > 0;
    patrimonio = formatearNumero(fondo.info.diaria.actual.patrimonio);
  }

  const variacionClase = rendimientoPositivo
    ? "VariacionPositiva"
    : "VariacionNegativa";

  return (
    <>
      <div className="Precio">
        <div className="Precio_componente">
          <div className="lado izquierda">
            {fondo && fondo.info ? (
              <>
                <div className="Precio_bloque">
                  <p className="Precio_title">Precio</p>
                  <div className="Precio_valores">
                    <p>${precioActual}</p>
                    <div className={`Variacion ${variacionClase}`}>
                      <p>{variacionAbsoluta}</p>
                      <p>({rendimiento}%)</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>No hay fondo seleccionado</p>
            )}

            {fondo && fondo.info ? (
              <>
                <div className="Precio_bloque">
                  <p className="Precio_title">Patrimonio</p>
                  <div className="Precio_valores">
                    <p>${patrimonio}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>No hay fondo seleccionado</p>
            )}
          </div>

          <div className="lado derecha">
            {fondo && fondo.info ? (
              <>
                <div className="Precio_bloque">
                  <p className="Precio_title">Fecha</p>
                  <div className="Precio_valores">
                    <p>{fondo.info.diaria.actual.fecha}</p>
                  </div>
                </div>
              </>
            ) : (
              <p>No hay fondo seleccionado</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Precio;
