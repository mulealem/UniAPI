var FormData = require("form-data");

const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
};

module.exports = class IMDbAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async getMarketQuote(region, symbols) {
    const data = await this.get(`market/v2/get-quotes`, {
      params: {
        region: region,
        symbols: symbols,
      },
      headers: headers,
    });
    return data;
  }

  async getMarketMovers(region, lang = "en-US", count, start) {
    const data = await this.get(`market/v2/get-movers`, {
      params: {
        region: region,
        lang: lang,
        count: count,
        start: start,
      },
      headers: headers,
    });
    return data;
  }

  async getMarketSummary(region) {
    const data = await this.get(`market/v2/get-summary`, {
      params: {
        region: region,
      },
      headers: headers,
    });
    return data;
  }

  // startdate and enddate are in unix timestamp in milliseconds
  async getMarketEarnings(region = "US", startDate, endDate, size = "10") {
    const data = await this.get(`market/get-earnings`, {
      params: {
        region: region,
        startDate: startDate,
        endDate: endDate,
        size: size,
      },
      headers: headers,
    });
    return data;
  }

  async getMarketTrendingTickers(region = "US") {
    const data = await this.get(`market/get-trending-tickers`, {
      params: {
        region: region,
      },
      headers: headers,
    });
    return data;
  }

  async getStockRecommendations(symbol) {
    const data = await this.get(`stock/v2/get-recommendations`, {
      params: {
        symbol: symbol,
      },
      headers: headers,
    });
    return data;
  }

  async getStockSimilarities(symbol) {
    const data = await this.get(`stock/v2/get-similarities`, {
      params: {
        symbol: symbol,
      },
      headers: headers,
    });
    return data;
  }

  async getStockUpgradeDowngradeHistory(symbol, region, lang = "en-US") {
    const data = await this.get(`stock/v3/get-upgrade-downgrade-history`, {
      params: {
        symbol: symbol,
        region: region,
        lang: lang,
      },
      headers: headers,
    });
    return data;
  }

  async getStockChart(
    interval,
    symbol,
    range,
    region,
    comparisons,
    includePrePost,
    useYfid,
    includeAdjustedClose,
    events
  ) {
    let intervalConverted = "1d";
    if (interval.includes("_")) {
      const intervalParts = interval.split("_");
      const intervalPart = intervalParts[0].toLowerCase();

      intervalConverted = intervalPart + intervalParts[1];
    } else {
      intervalConverted = interval.toLowerCase();
    }

    let rangeConverted = "1d";
    if (range.includes("_")) {
      const rangeParts = range.split("_");
      const rangePart = rangeParts[0].toLowerCase();

      rangeConverted = rangePart + rangeParts[1];
    } else {
      rangeConverted = range.toLowerCase();
    }

    const data = await this.get(`stock/v3/get-chart`, {
      params: {
        interval: intervalConverted,
        symbol: symbol,
        range: rangeConverted,
        region: region,
        comparisons: comparisons,
        includePrePost: includePrePost,
        useYfid: useYfid,
        includeAdjustedClose: includeAdjustedClose,
        events: events,
      },
      headers: headers,
    });
    return data;
  }

  async getStockHistoricalData(symbol, region) {
    const data = await this.get(`stock/v3/get-historical-data`, {
      params: {
        symbol: symbol,
        region: region,
      },
      headers: headers,
    });
    return data;
  }

  async getStockProfile(symbol, region, lang = "en-US") {
    const data = await this.get(`stock/v3/get-profile`, {
      params: {
        symbol: symbol,
        region: region,
        lang: lang,
      },
      headers: headers,
    });
    return data;
  }

  async getStockTimeSeries(symbol, period2, period1, region) {
    const data = await this.get(`stock/v2/get-timeseries`, {
      params: {
        symbol: symbol,
        period2: period2,
        period1: period1,
        region: region,
      },
      headers: headers,
    });
    return data;
  }

  async getStockEarnings(symbol, region, lang = "en-US") {
    const data = await this.get(`stock/get-earnings`, {
      params: {
        symbol: symbol,
        region: region,
        lang: lang,
      },
      headers: headers,
    });
    return data;
  }

  async getStockInsights(symbol) {
    const data = await this.get(`stock/v3/get-insights`, {
      params: {
        symbol: symbol,
      },
      headers: headers,
    });
    return data;
  }

  async getStockESGScores(symbol, region, lang = "en-US") {
    const data = await this.get(`stock/get-esg-scores`, {
      params: {
        symbol: symbol,
        region: region,
        lang: lang,
      },
      headers: headers,
    });
    return data;
  }

  async getStockCompanyOutlook(symbol, region, lang = "en-US") {
    const data = await this.get(`stock/get-company-outlook`, {
      params: {
        symbol: symbol,
        region: region,
        lang: lang,
      },
      headers: headers,
    });
    return data;
  }
};
