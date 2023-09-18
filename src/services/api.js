export const getData = async (endpoint) => {
  const res = await fetch(`https://dummyjson.com/${endpoint}`);
  if (!res.ok) throw new Error("Error en la petición");
  const data = await res.json();
  return data;
};
