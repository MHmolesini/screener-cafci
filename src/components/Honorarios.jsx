import React, { useEffect, useState } from "react";
import "../styles/components/Honorarios.css";

const Honorarios = ({ fondo }) => {
  const [calificadora, setCalificadora] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [nota, setNota] = useState(null);

  const [gerente, setGerente] = useState(null);
  const [depositaria, setDepositaria] = useState(null);
  const [ingreso, setIngreso] = useState(null);
  const [egreso, setEgreso] = useState(null);
  const [transferencia, setTransferencia] = useState(null);
  const [gastos, setGastos] = useState(null);
  const [exito, setExito] = useState(null);

  const [sumaHonorarios, setSumaHonorarios] = useState(null);

  useEffect(() => {
    if (fondo && fondo.info) {
      setCalificadora(fondo?.info?.mensual?.calificacion?.calificadora || null);
      setFecha(fondo?.info?.mensual?.calificacion?.fecha || null);
      setNota(fondo?.info?.mensual?.calificacion?.nota || null);

      const gerenteValor = parseFloat(
        fondo?.info?.mensual?.honorariosComisiones
          ?.honorariosAdministracionGerente || 0
      );
      const depositariaValor = parseFloat(
        fondo?.info?.mensual?.honorariosComisiones
          ?.honorariosAdministracionDepositaria || 0
      );

      setGerente(gerenteValor.toFixed(4));
      setDepositaria(depositariaValor.toFixed(4));
      setIngreso(
        parseFloat(
          fondo?.info?.mensual?.honorariosComisiones?.comisionIngreso || 0
        ).toFixed(2)
      );
      setEgreso(
        parseFloat(
          fondo?.info?.mensual?.honorariosComisiones?.comisionRescate || 0
        ).toFixed(2)
      );
      setTransferencia(
        parseFloat(
          fondo?.info?.mensual?.honorariosComisiones?.comisionTransferencia || 0
        ).toFixed(2)
      );
      setGastos(
        parseFloat(
          fondo?.info?.mensual?.honorariosComisiones?.gastosGestion || 0
        ).toFixed(2)
      );
      setExito(
        fondo?.info?.mensual?.honorariosComisiones?.honorariosExito || null
      );

      setSumaHonorarios(
        (parseFloat(gerenteValor) + parseFloat(depositariaValor)).toFixed(2)
      );
      console.log(gerenteValor, typeof gerenteValor, setSumaHonorarios);
    }
  }, [fondo]);

  return (
    <>
      <div className="Honorarios">
        <div className="Honorarios_Componente">
          <div className="Honorarios_cuerpo">
            <div>
              <p className="title">Calificación</p>
            </div>
            <div className="Honorarios_datos">
              {fecha ? (
                <>
                  <div className="Honorarios_items">
                    <p>{fecha}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {calificadora ? (
                <>
                  <div className="Honorarios_items">
                    <p>{calificadora}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {nota ? (
                <>
                  <div className="Honorarios_items">
                    <p>{nota}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="Honorarios_cuerpo">
            <div>
              <p className="title">Honorarios y comisiones</p>
            </div>
            <div className="Honorarios_datos">
              {gerente && depositaria && sumaHonorarios ? (
                <>
                  <div className="Honorarios_items">
                    <p>Honorarios de administración: {sumaHonorarios}%</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {ingreso && egreso ? (
                <>
                  <div className="Honorarios_items">
                    <p>
                    Comision de ingreso/egreso: {ingreso}% / {egreso}%
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {transferencia ? (
                <>
                  <div className="Honorarios_items">
                    <p>Comision de transferencia: {transferencia}%</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {gastos ? (
                <>
                  <div className="Honorarios_items">
                    <p>Gastos ordinarios de gestión: {gastos}%</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {exito ? (
                <>
                  <div className="Honorarios_items">
                    <p>Comisión de exito: {exito}</p>
                  </div>
                </>
              ) : (
                <></>
              )}

              <p>Otros: </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Honorarios;
