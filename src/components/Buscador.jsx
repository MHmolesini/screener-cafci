import React, { useEffect, useState } from "react";
import "../styles/components/Buscador.css";
import Search from "../images/icons/Search.svg";
import { getListaDeFondos } from "../services/listaDeFondos";

const Buscador = ({ onSelectFondo }) => {
  // Estado para el nombre del fondo ingresado en el input
  const [fondoNombre, setFondoNombre] = useState("");
  // Estado para la lista completa de fondos obtenida de la API
  const [fondos, setFondos] = useState([]);
  // Estado para la lista de fondos filtrados según el nombre ingresado
  const [filtrosFondos, setFiltrosFondos] = useState([]);
  // Estado para el fondo seleccionado
  const [selectedFondo, setSelectedFondo] = useState(null);
  // Estado para controlar la visibilidad del desplegable
  const [showDropdown, setShowDropdown] = useState(false);

  // Hook para obtener la lista de fondos al montar el componente
  useEffect(() => {
    const fetchFondos = async () => {
      try {
        // Llama a la función para obtener la lista de fondos desde la API
        const { data } = await getListaDeFondos();
        setFondos(data); // Actualiza el estado con la lista de fondos
        console.log("Buscador - fetchFondos - data: ", data)
      } catch (error) {
        console.error("Error al obtener la lista de fondos:", error);
      }
    };

    fetchFondos();
  }, []);

  // Hook para filtrar los fondos según el nombre ingresado
  useEffect(() => {
    if (fondoNombre.length > 0) {
      // Filtra los fondos que coinciden con el nombre ingresado
      const filtros = fondos.filter(
        (fondo) =>
          fondo.nombre.toLowerCase().includes(fondoNombre.toLowerCase()) ||
          (fondo.clase_fondos &&
            fondo.clase_fondos.some((clase) =>
              clase.nombre.toLowerCase().includes(fondoNombre.toLowerCase())
            ))
      );
      console.log(filtros)
      // Actualiza el estado con los primeros 10 fondos filtrados
      setFiltrosFondos(filtros); //.slice(0, 10)
      setShowDropdown(true); // Muestra el desplegable
    } else {
      setFiltrosFondos([]); // Limpia la lista de fondos filtrados
      setShowDropdown(false); // Oculta el desplegable
    }
  }, [fondoNombre, fondos]);

  console.log("Buscador - useEffect - fondoNombre", fondoNombre)
  console.log("Buscador - useEffect - fondos", fondos)

  // Maneja la selección de un fondo del desplegable
  const handleSelectFondo = (fondo, clase) => {
    setFondoNombre(clase.nombre);
    setFiltrosFondos([]);
    setShowDropdown(false);
    console.log(fondo, clase, clase.nombre)
    if (onSelectFondo) {
      onSelectFondo(fondo.id, clase.id);
    } else {
      console.error("onSelectFondo no está definido");
    }
  };
  console.log(onSelectFondo)

  return (
    <>
      <div className="Buscador">
        <div className="Buscador_interior">
          <div className="Icon">
            <img src={Search} alt="Search" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={fondoNombre} // Valor del input
            onChange={(e) => setFondoNombre(e.target.value)} // Actualiza el estado al cambiar el input
            onFocus={() => setShowDropdown(true)} // Muestra el desplegable al enfocar
          />
          
          {/* Muestra el desplegable si hay fondos filtrados y showDropdown es true */}
          {showDropdown && filtrosFondos.length > 0 && (
            <ul className="Search_lista">
              {filtrosFondos.map((fondo) => (
                <li key={fondo.id}>
                  <ul>
                    {fondo.clase_fondos.map((clase) => (
                      <li
                        key={clase.id}
                        onClick={() => handleSelectFondo(fondo, clase)}
                        className="Search_item"
                      >
                        {clase.nombre}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Buscador;
