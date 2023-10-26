const IMDbDefs = `#graphql
type I {
  height: Int
  imageUrl: String
  width: Int
}

type D {
  id: String
  l: String
  q: String
  qid: String
  rank: Int
  s: String
  y: Int
  yr: String
  i: I
}

type IMDBAutoCompleteResponse {
  q: String
  v: Int
  d: [D]
}


type Roles {
  character: String
  characterId: String
}

type Principals {
  id: String
  legacyNameText: String
  name: String
  category: String
  endYear: Int
  episodeCount: Int
  startYear: Int
  roles: [Roles]
  characters: [String]
}

type Image {
  height: Int
  id: String
  url: String
  width: Int
}

type Results {
  id: String
  runningTimeInMinutes: Int
  nextEpisode: String
  numberOfEpisodes: Int
  seriesEndYear: Int
  seriesStartYear: Int
  title: String
  titleType: String
  year: Int
  principals: [Principals]
  image: Image
}

type Meta {
  operation: String
  requestId: String
  serviceTimeMs: Float
}

type FindTitleResponse {
  type: String
  query: String
  types: [String]
  results: [Results]
  meta: Meta
}


type IMDbNameSpace {
  autoComplete(query: String!): IMDBAutoCompleteResponse
  findTitle(query: String!): FindTitleResponse
}

  type Query {
    IMDb: IMDbNameSpace
  }
`;

const IMDbResolvers = {
  IMDbNameSpace: {
    autoComplete(_, { query }, { dataSources }) {
      return dataSources.IMDbAPI.autoComplete(query);
    },
    findTitle(_, { query }, { dataSources }) {
      return dataSources.IMDbAPI.findTitle(query);
    },
  },
  Query: {
    IMDb(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  IMDbDefs,
  IMDbResolvers,
};
