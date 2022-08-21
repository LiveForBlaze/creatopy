export const getWeatherQuery = `
  query ($name: String = "Moscow", $config: ConfigInput = { units:metric }) {
    getCityByName(name: $name, config: $config) {
      country
      name
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        summary {
          title
          description
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility,
          humidity
        }
      }
    }
  }
`;
  