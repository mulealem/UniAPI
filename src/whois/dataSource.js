const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://zozor54-whois-lookup-v1.p.rapidapi.com/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "zozor54-whois-lookup-v1.p.rapidapi.com",
};

module.exports = class Whois extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async domainInformation(domain, format = "json", forceRefresh = "0") {
    const data = await this.get("", {
      params: {
        domain: domain,
        format: format,
        _forceRefresh: forceRefresh,
      },
      headers: headers,
    });
    return data;
  }

  async domainsFromIp(ip) {
    const data = await this.get("getDomainsFromIp", {
      params: {
        ip: ip,
      },
      headers: headers,
    });
    // console.log(data);
    return data;
  }

  async nsLookup(domain) {
    const data = await this.get("nslookup", {
      params: {
        domain: domain,
      },
      headers: headers,
    });
    return data;
  }
};
