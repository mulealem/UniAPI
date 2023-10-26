const googleTranslateDefs = `#graphql
type Detections {
  isReliable: Boolean
  confidence: Int
  language: String
}

type DetectionsResponse {
  detections: [[Detections]]
}

type Languages {
  language: String
}

type LanguagesResponse {
  languages: [Languages]
}

type Translations {
  translatedText: String
}

type TranslationsResponse {
  translations: [Translations]
}

type GoogleTranslateNameSpace {
  detect(text: String!): DetectionsResponse
  languages: LanguagesResponse
  translate(text: String!, source: String!, target: String!): TranslationsResponse
}

  type Query {
    googleTranslate: GoogleTranslateNameSpace
  }
`;

// const googleTranslateResolvers = {
const googleTranslateResolvers = {
  GoogleTranslateNameSpace: {
    detect(_, { text }, { dataSources }) {
      return dataSources.googleTranslateAPI.detect(text);
    },
    languages(_, { domain }, { dataSources }) {
      return dataSources.googleTranslateAPI.languages();
    },
    translate(_, { text, source, target }, { dataSources }) {
      return dataSources.googleTranslateAPI.translate(text, source, target);
    },
  },
  Query: {
    googleTranslate(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  googleTranslateDefs,
  googleTranslateResolvers,
};
