import { contents } from "../../assets/data/content";

export const getContentsByType = (contentType, limit) => {
  const types = ["1", "2", "3", '4'];
  if (!types.includes(contentType)) {
    throw new Error(`${contentType} is not a valid Content Type`);
  }
  
  // Filtra el contenido por el tipo especificado
  const filteredContents = contents.filter((content) => content.type === contentType);
  
  // Si se proporciona un límite, devuelve los últimos 'limit' registros
  if (limit !== undefined) {
    return filteredContents.slice(-limit);
  }
  
  // Si no se proporciona límite, devuelve todo el contenido filtrado
  return filteredContents;
};
