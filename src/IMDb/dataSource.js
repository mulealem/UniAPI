var FormData = require("form-data");

const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://imdb8.p.rapidapi.com/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
};

module.exports = class IMDbAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async autoComplete(query) {
    const data = await this.get("title/auto-complete", {
      params: {
        q: query,
      },
      headers: headers,
    });
    return data;
  }

  async findTitle(query) {
    const data = await this.get(`title/find`, {
      params: {
        q: query,
      },
      headers: headers,
    });
    return data;
  }

  // async
};
