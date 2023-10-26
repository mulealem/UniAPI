const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://weatherapi-com.p.rapidapi.com/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};

module.exports = class WeatherAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async realTimeWeather(query) {
    const data = await this.get("current.json", {
      params: {
        q: query,
      },
      headers: headers,
    });
    return data;
  }

  async forecastWeather(query, days, dt) {
    const data = await this.get("forecast.json", {
      params: {
        q: query,
        days: days,
        dt: dt,
      },
      headers: headers,
    });
    return data;
  }

  async ipLookUp(query) {
    const data = await this.get("ip.json", {
      params: {
        q: query,
      },
      headers: headers,
    });
    return data;
  }

  async timeZone(query) {
    const data = await this.get("timezone.json", {
      params: {
        q: query,
      },
      headers: headers,
    });
    return data;
  }

  async astronomy(query, date) {
    const data = await this.get("astronomy.json", {
      params: {
        q: query,
        dt: date,
      },
      headers: headers,
    });
    return data;
  }
};
