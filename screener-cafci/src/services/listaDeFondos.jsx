// URL base de la API
const API_URL = "https://api.cafci.org.ar/fondo";

// Función para obtener la ficha de un fondo específico
export const getListaDeFondos = async () => {
  try {
    // Realiza una solicitud fetch a la API con los IDs de fondo y clase proporcionados
    const response = await fetch(`${API_URL}?limit=0&include=clase_fondo`);

    // Verifica si la respuesta es correcta
    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    // Convierte la respuesta a formato JSON
    const jsonListaDeFondos = await response.json();

    // Verifica si los datos son válidos y no están vacíos
    if (
      !jsonListaDeFondos.data ||
      Object.keys(jsonListaDeFondos.data).length === 0
    ) {
      throw new Error("No se encontraron datos");
    }

    // Retorna el objeto 'jsonListaDeFondos'
    return {
      data: jsonListaDeFondos.data,
    };
  } catch (error) {
    // Muestra un error en la consola y lanza el error
    console.error("Error de la API:", error);
    throw error;
  }
};
