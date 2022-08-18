const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "bf25c7e0568f28f2df9870076b23c95b";

export async function getTemperatureByCityId(id, units) {
  const getParams = new URLSearchParams({
    id,
    appid: apiKey,
    units,
    lang: "ru",
  });
  const response = await fetch(`${apiUrl}weather?${getParams}`);
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
