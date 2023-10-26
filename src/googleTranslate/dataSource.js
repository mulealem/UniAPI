var FormData = require("form-data");

const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL =
  "https://google-translate1.p.rapidapi.com/language/translate/v2/";

const headers = {
  "content-type": "application/x-www-form-urlencoded",
  "Accept-Encoding": "application/gzip",
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
};

module.exports = class GoogleTranslateAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async detect(query) {
    // const formData = new FormData();
    // formData.append("q", query);

    const encodedParams = new URLSearchParams();
    encodedParams.set("q", query);

    const data = await this.post("detect", {
      body: encodedParams,
      headers: headers,
    });
    return data.data;
  }

  async languages() {
    const data = await this.get("languages", {
      headers: headers,
    });
    return data.data;
  }

  async translate(query, source, target, format) {
    const encodedParams = new URLSearchParams();
    encodedParams.set("q", query);
    encodedParams.set("source", source);
    encodedParams.set("target", target);

    const data = await this.post("", {
      body: encodedParams,
      headers: headers,
    });
    return data.data;
  }
};
