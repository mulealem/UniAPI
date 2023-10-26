const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://news-api14.p.rapidapi.com/top-headlines";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
};

module.exports = class NewsAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async topHeadlines() {
    const data = await this.get("top-headlines", {
      params: {
        country: "us",
      },
      headers: headers,
    });
    return data;
  }

  async search({
    q,
    country = "us",
    language = "en",
    pageSize = "10",
    publisher,
  }) {
    const data = await this.get("search", {
      params: {
        q,
        country,
        language,
        pageSize,
        publisher,
      },
      headers: headers,
    });
    return data;
  }
};
