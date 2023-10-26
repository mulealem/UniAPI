require("dotenv").config();
const { startStandaloneServer } = require("@apollo/server/standalone");

const WeatherAPI = require("./weather/dataSource");
const Whois = require("./whois/dataSource");
const JobSearchAPI = require("./jobSearch/dataSource");
const SofaSportAPI = require("./sofaSport/dataSource");
const NewsAPI = require("./news/dataSource");
const GoogleTranslateAPI = require("./googleTranslate/dataSource");
const IMDbAPI = require("./IMDb/dataSource");
const yahooFinanceAPI = require("./yahooFinance/dataSource");

const server = require("./schema");

startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        weatherAPI: new WeatherAPI({ cache }),
        whois: new Whois({ cache }),
        jobSearchAPI: new JobSearchAPI({ cache }),
        sofaSportAPI: new SofaSportAPI({ cache }),
        newsAPI: new NewsAPI({ cache }),
        googleTranslateAPI: new GoogleTranslateAPI({ cache }),
        IMDbAPI: new IMDbAPI({ cache }),
        yahooFinanceAPI: new yahooFinanceAPI({ cache }),
      },
    };
  },
  listen: { port: 7503 },
})
  .then((alen) => {
    console.log(`🚀  Server ready at: ${alen.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
