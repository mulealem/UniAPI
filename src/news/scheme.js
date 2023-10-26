const newsDefs = `#graphql
type Publisher {
  name: String
  url: String
}

type Articles {
  title: String
  url: String
  published_date: String
  publisher: Publisher
}

type NewsResponse {
  status: String
  totalResults: Int
  articles: [Articles]
}

# params: {
#     q: 'computer',
#     country: 'us',
#     language: 'en',
#     pageSize: '10',
#     publisher: 'cnn.com,bbc.com'
#   },

type NewsNameSpace {
  topHeadlines: NewsResponse
  search(q: String!, country: String, language: String, pageSize: String, publisher: String)
  : NewsResponse
}

  type Query {
    news: NewsNameSpace
  }
`;

// const newsResolvers = {
const newsResolvers = {
  NewsNameSpace: {
    topHeadlines(_, { domain }, { dataSources }) {
      return dataSources.newsAPI.topHeadlines();
    },
    search(_, { q, country, language, pageSize, publisher }, { dataSources }) {
      return dataSources.newsAPI.search({
        q,
        country,
        language,
        pageSize,
        publisher,
      });
    },
  },
  Query: {
    news(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  newsDefs,
  newsResolvers,
};
