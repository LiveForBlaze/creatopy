export interface GetWeatherData {
  getCityByName: GetCityByName;
}

interface GetCityByName {
  weather: Weather;
  name: string;
}

interface Weather {
  temperature: Temperature;
  wind: Wind;
  summary: Summary;
}

interface Temperature {
  actual: number;
}

interface Wind {
  speed: number;
}

interface Summary {
  description: string;
}
