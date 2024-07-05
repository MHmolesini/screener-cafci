// api.js
const API_URL = 'https://api.cafci.org.ar/fondo';

// Función para obtener los rendimientos de un fondo específico
export const getRendimientos = async (fondoId, claseId, startDate, endDate) => {
  try {
    const response = await fetch(`${API_URL}/${fondoId}/clase/${claseId}/rendimiento/${startDate}/${endDate}?step=0`);
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    
    const jsonResponse = await response.json();
    
    if (!jsonResponse.data || Object.keys(jsonResponse.data).length === 0) {
      throw new Error('No se encontraron datos');
    }
    
    return jsonResponse.data;
  } catch (error) {
    console.error('Error de la API:', error);
    throw error;
  }
};
