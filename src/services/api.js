export const getData = async (endpoint) => {
  // const res = await fetch(`https://dummyjson.com/${endpoint}`);
  const res = await fetch(`http://localhost:3000/api/${endpoint}`);
  if (!res.ok) throw new Error("Error en la petición");
  const data = await res.json();
  console.log(data);
  return data;
};
