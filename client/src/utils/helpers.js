export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

export const parseSOAPResponse = (xmlString) => {
  // Implementación básica - debe adaptarse al XML real
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    // Extracción de datos del XML
    // Esto es un ejemplo, debe adaptarse a la estructura real
    const vehicles = Array.from(xmlDoc.getElementsByTagName("Vehicle")).map(v => ({
      mId: v.getAttribute("mId"),
      placa: v.getElementsByTagName("Plate")[0]?.textContent,
      descripcion: v.getElementsByTagName("Description")[0]?.textContent
    }));
    return vehicles;
  } catch (error) {
    console.error("Error parsing SOAP response:", error);
    return [];
  }
};