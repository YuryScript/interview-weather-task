const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "";

export async function getTemperatureByCityId(id, units) {
  const getParams = new URLSearchParams({
    id,
    appid: apiKey,
    units,
    lang: "ru",
  });
  const response = await fetch(`${apiUrl}weather?${getParams}`);
  if(response.status === 401) {
    throw new Error('Need the correct openweathermap key')
  }
  const data = await response.json();
  return data;
}

export async function getCitiesTemperatureData() {
  const citiesId = [524894, 498817];
  const result = [];

  for (let id of citiesId) {
    const dataC = await getTemperatureByCityId(id, "metric");
    const dataF = await getTemperatureByCityId(id, "imperial");
    result.push({
      id,
      name: dataC?.name,
      tempC: dataC?.main?.temp,
      tempF: dataF?.main?.temp,
    });
  }

  return result;
}
