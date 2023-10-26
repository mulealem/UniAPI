const { ApolloServer } = require("@apollo/server");
const { merge } = require("lodash");

const {
  ApolloServerPluginLandingPageProductionDefault,
} = require("@apollo/server/plugin/landingPage/default");

const { weatherDefs, weatherResolvers } = require("./weather/scheme");
const { whoisDefs, whoisResolvers } = require("./whois/scheme");
const { jobSearchDefs, jobSearchResolvers } = require("./jobSearch/scheme");
const { sofaSportDefs, sofaSportResolvers } = require("./sofaSport/scheme");
const { newsDefs, newsResolvers } = require("./news/scheme");
const { IMDbDefs, IMDbResolvers } = require("./IMDb/scheme");
const {
  googleTranslateDefs,
  googleTranslateResolvers,
} = require("./googleTranslate/scheme");

const {
  yahooFinanceDefs,
  yahooFinanceResolvers,
} = require("./yahooFinance/scheme");

module.exports = server = new ApolloServer({
  typeDefs: [
    weatherDefs,
    whoisDefs,
    jobSearchDefs,
    sofaSportDefs,
    newsDefs,
    googleTranslateDefs,
    IMDbDefs,
    yahooFinanceDefs,
  ],
  resolvers: merge(
    weatherResolvers,
    whoisResolvers,
    jobSearchResolvers,
    sofaSportResolvers,
    newsResolvers,
    googleTranslateResolvers,
    IMDbResolvers,
    yahooFinanceResolvers
  ),
  plugins: [
    ApolloServerPluginLandingPageProductionDefault({
      footer: false,
      graphRef: "myGraph@prod",
    }),
  ],
});
