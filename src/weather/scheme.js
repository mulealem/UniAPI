const { ApolloServer } = require("@apollo/server");
const { merge } = require("lodash");

const weatherDefs = `#graphql

type Condition {
  text: String
  icon: String
  code: Int
}

type Current {
  last_updated_epoch: Float
  last_updated: String
  temp_c: Float
  temp_f: Float
  is_day: Float
  wind_mph: Float
  wind_kph: Float
  wind_degree: Float
  wind_dir: String
  pressure_mb: Float
  pressure_in: Float
  precip_mm: Float
  precip_in: Float
  humidity: Float
  cloud: Float
  feelslike_c: Float
  feelslike_f: Float
  vis_km: Float
  vis_miles: Float
  uv: Float
  gust_mph: Float
  gust_kph: Float
  condition: Condition
}

type Location {
  name: String
  region: String
  country: String
  lat: Float
  lon: Float
  tz_id: String
  localtime_epoch: Int
  localtime: String
}

type RealTimeWeatherResponse {
  current: Current
  location: Location
}

type Condition {
  text: String
  icon: String
  code: Int
}

type Hour {
  time_epoch: Int
  time: String
  temp_c: Float
  temp_f: Float
  is_day: Int
  wind_mph: Float
  wind_kph: Float
  wind_degree: Int
  wind_dir: String
  pressure_mb: Int
  pressure_in: Float
  precip_mm: Float
  precip_in: Int
  humidity: Int
  cloud: Int
  feelslike_c: Float
  feelslike_f: Float
  windchill_c: Float
  windchill_f: Float
  heatindex_c: Float
  heatindex_f: Float
  dewpoint_c: Float
  dewpoint_f: Float
  will_it_rain: Int
  chance_of_rain: Int
  will_it_snow: Int
  chance_of_snow: Int
  vis_km: Int
  vis_miles: Int
  gust_mph: Float
  gust_kph: Float
  uv: Int
  condition: Condition
}

type Astro {
  sunrise: String
  sunset: String
  moonrise: String
  moonset: String
  moon_phase: String
  moon_illumination: String
  is_moon_up: Int
  is_sun_up: Int
}

type Day {
  maxtemp_c: Float
  maxtemp_f: Float
  mintemp_c: Float
  mintemp_f: Float
  avgtemp_c: Float
  avgtemp_f: Float
  maxwind_mph: Float
  maxwind_kph: Float
  totalprecip_mm: Float
  totalprecip_in: Float
  totalsnow_cm: Int
  avgvis_km: Float
  avgvis_miles: Int
  avghumidity: Int
  daily_will_it_rain: Int
  daily_chance_of_rain: Int
  daily_will_it_snow: Int
  daily_chance_of_snow: Int
  uv: Int
  condition: Condition
}

type Forecastday {
  date: String
  date_epoch: Int
  hour: [Hour]
  astro: Astro
  day: Day
}

type Forecast {
  forecastday: [Forecastday]
}

type ForecastWeatherResponse {
  forecast: Forecast
  current: Current
  location: Location
}

type IPLookUpResponse {
  ip: String
  type: String
  continent_code: String
  continent_name: String
  country_code: String
  country_name: String
  is_eu: String
  geoname_id: Int
  city: String
  region: String
  lat: Float
  lon: Float
  tz_id: String
  localtime_epoch: Int
  localtime: String
}

type Location {
  name: String
  region: String
  country: String
  lat: Float
  lon: Float
  tz_id: String
  localtime_epoch: Int
  localtime: String
}

type TimeZoneResponse {
  location: Location
}

type Astro {
  sunrise: String
  sunset: String
  moonrise: String
  moonset: String
  moon_phase: String
  moon_illumination: String
  is_moon_up: Int
  is_sun_up: Int
}

type Astronomy {
  astro: Astro
}

type Location {
  name: String
  region: String
  country: String
  lat: Float
  lon: Float
  tz_id: String
  localtime_epoch: Int
  localtime: String
}

type AstronomyResponse {
  astronomy: Astronomy
  location: Location
}





  type WeatherNamespace {
    realTimeWeather(query: String!): RealTimeWeatherResponse
    forecastWeather(query: String!, days: Int, dt: String): ForecastWeatherResponse
    ipLookUp(query: String!): IPLookUpResponse
    timeZone(query: String!): TimeZoneResponse
    astronomy(query: String!, date: String): AstronomyResponse
}

  type Query {
    weather: WeatherNamespace
  }
`;

const weatherResolvers = {
  WeatherNamespace: {
    realTimeWeather(_, { query }, { dataSources }) {
      return dataSources.weatherAPI.realTimeWeather(query);
    },
    forecastWeather(_, { query, days, dt }, { dataSources }) {
      return dataSources.weatherAPI.forecastWeather(query, days, dt);
    },
    ipLookUp(_, { query }, { dataSources }) {
      return dataSources.weatherAPI.ipLookUp(query);
    },
    timeZone(_, { query }, { dataSources }) {
      return dataSources.weatherAPI.timeZone(query);
    },
    astronomy(_, { query, date }, { dataSources }) {
      return dataSources.weatherAPI.astronomy(query, date);
    },
  },
  Query: {
    weather(_, __, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  weatherDefs,
  weatherResolvers,
};
