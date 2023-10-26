const sofaSportDefs = `#graphql
# course_events
enum COURSE_EVENTS {
  LAST
  NEXT
}

type SuggestResponse {
  data: [String]
}

type Country {
  alpha2: String
  name: String
}

type Sport {
  name: String
  slug: String
  id: Int
}

type Category {
  name: String
  slug: String
  id: Int
  flag: String
  sport: Sport
}

type TeamColors {
  primary: String
  secondary: String
  text: String
}

type PrimaryUniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  hasPerformanceGraphFeature: Boolean
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type UniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  hasPerformanceGraphFeature: Boolean
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type Tournament {
  name: String
  slug: String
  priority: Int
  id: Int
  uniqueTournament: UniqueTournament
  category: Category
}

type TeamSearchResult {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  ranking: Int
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  country: Country
  primaryUniqueTournament: PrimaryUniqueTournament
  tournament: Tournament
  category: Category
  sport: Sport
}

type TeamSearchResponse {
  data: [TeamSearchResult]
}

type Referee {
  name: String
  slug: String
  yellowCards: Int
  redCards: Int
  yellowRedCards: Int
  games: Int
  id: Int
  sport: Sport
}

type RefereeSearchResponse {
  data: [Referee]
}

type Team {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  sport: Sport
}

type Teams {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  sport: Sport
}

type Manager {
  name: String
  slug: String
  shortName: String
  id: Int
  team: Team
  teams: [Teams]
  sport: Sport
}

type ManagerSearchResponse {
  data: [Manager]
}

type PlayerPrimaryUniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type PlayerUniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type PlayerTournament {
  name: String
  slug: String
  priority: Int
  id: Int
  uniqueTournament: PlayerUniqueTournament
  category: Category
}

type PlayerTeam {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  primaryUniqueTournament: PlayerPrimaryUniqueTournament
  tournament: PlayerTournament
  sport: Sport
}

type Player {
  name: String
  slug: String
  shortName: String
  position: String
  userCount: Int
  id: Int
  dateOfBirthTimestamp: Int
  team: PlayerTeam
}

type PlayerSearchResponse {
  data: [Player]
}

type TournamentSearchResult {
  name: String
  slug: String
  userCount: Int
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type TournamentSearchResponse {
  data: [TournamentSearchResult]
}

type ProposedMarketValueRaw {
  value: Int
  currency: String
}

type PlayerPrimaryUniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  id: Int
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

# type UniqueTournament {
#   name: String
#   slug: String
#   primaryColorHex: String
#   secondaryColorHex: String
#   userCount: Int
#   id: Int
#   displayInverseHomeAwayTeams: Boolean
#   category: Category
# }

type TeamOfPlayer {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  country: Country
  primaryUniqueTournament: PlayerPrimaryUniqueTournament
  tournament: Tournament
  sport: Sport
}

type TeamPlayer {
  name: String
  slug: String
  shortName: String
  position: String
  jerseyNumber: String
  height: Int
  preferredFoot: String
  retired: Boolean
  userCount: Int
  deceased: Boolean
  id: Int
  shirtNumber: Int
  dateOfBirthTimestamp: Int
  contractUntilTimestamp: Int
  proposedMarketValue: Int
  proposedMarketValueRaw: ProposedMarketValueRaw
  country: Country
  team: TeamOfPlayer
}

type NationalPlayers {
  player: TeamPlayer
}

type ForeignPlayers {
  player: TeamPlayer
}

type Players {
  player: TeamPlayer
}

type TeamPlayers {
  nationalPlayers: [NationalPlayers]
  foreignPlayers: [ForeignPlayers]
  players: [Players]
}

type TeamPlayersResponse {
  data: TeamPlayers
}

type TeamRanking {
  year: String
  type: Int
  rowName: String
  ranking: Int
  points: Int
  id: Int
  rankingClass: String
  team: Team
}

type TeamRankingsResponse {
  data: [TeamRanking]
}

type TeamLatestMedia {
  title: String
  subtitle: String
  url: String
  thumbnailUrl: String
  mediaType: Int
  doFollow: Boolean
  keyHighlight: Boolean
  id: Int
  createdAtTimestamp: Int
  sourceUrl: String
}

type TeamLatestMediasResponse {
  data: [TeamLatestMedia]
}

type Changes {
  changeTimestamp: Int
  changes: [String]
}

type Time {
  injuryTime1: Int
  injuryTime2: Int
  currentPeriodStartTimestamp: Int
}

type Score {
  current: Int
  display: Int
  period1: Int
  period2: Int
  normaltime: Int
}

type EventTeam {
  name: String
  slug: String
  shortName: String
  gender: String
  userCount: Int
  nameCode: String
  disabled: Boolean
  national: Boolean
  type: Int
  id: Int
  teamColors: TeamColors
  subTeams: [String]
  country: Country
  sport: Sport
}

type Status {
  code: Int
  description: String
  type: String
}

type RoundInfo {
  round: Int
}

type EventUniqueTournament {
  name: String
  slug: String
  primaryColorHex: String
  secondaryColorHex: String
  userCount: Int
  crowdsourcingEnabled: Boolean
  hasPerformanceGraphFeature: Boolean
  id: Int
  hasEventPlayerStatistics: Boolean
  displayInverseHomeAwayTeams: Boolean
  category: Category
}

type EventTournament {
  name: String
  slug: String
  priority: Int
  id: Int
  uniqueTournament: EventUniqueTournament
  category: Category
}

type Events {
  customId: String
  winnerCode: Int
  hasGlobalHighlights: Boolean
  hasXg: Boolean
  hasEventPlayerStatistics: Boolean
  hasEventPlayerHeatMap: Boolean
  detailId: Int
  crowdsourcingDataDisplayEnabled: Boolean
  id: Int
  startTimestamp: Int
  slug: String
  finalResultOnly: Boolean
  changes: Changes
  time: Time
  awayScore: Score
  homeScore: Score
  awayTeam: EventTeam
  homeTeam: EventTeam
  status: Status
  roundInfo: RoundInfo
  tournament: Tournament
}

type TeamEvents {
  hasNextPage: Boolean
  events: [Events]
}

type TeamEventsResponse {
  data: TeamEvents
}

type SportsResponse {
  data: [Sport]
}

type SportsNumberLive {
  name: String
  slug: String
  id: Int
  live: Int
  total: Int
}

type SportsNumberLiveResponse {
  data: [SportsNumberLive]
}

type CategoryResponse {
  data: [Category]
}

type SofaSportNameSpace {
  suggest(query: String!): SuggestResponse
  searchPlayer(query: String!): PlayerSearchResponse
  searchTeam(query: String!): TeamSearchResponse
  searchReferee(query: String!): RefereeSearchResponse
  searchManager(query: String!): ManagerSearchResponse
  searchTournament(query: String!): TournamentSearchResponse
  teamPlayers(team_id: Int!): TeamPlayersResponse
  teamRankings(team_id: Int!): TeamRankingsResponse
  teamLatestMedias(team_id: Int!): TeamLatestMediasResponse
  teamEvents(team_id: Int!, course_events:COURSE_EVENTS, page: Int ): TeamEventsResponse
  sports: SportsResponse
  sportsNumberLive: SportsNumberLiveResponse
  sportsCatories(sport_id: Int!): CategoryResponse
}

  type Query {
    sofaSport: SofaSportNameSpace
  }
`;

// const sofaSportResolvers = {
const sofaSportResolvers = {
  SofaSportNameSpace: {
    suggest(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.suggest(query);
    },
    searchPlayer(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.searchPlayer(query);
    },
    searchTeam(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.searchTeam(query);
    },
    searchReferee(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.searchReferee(query);
    },
    searchManager(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.searchManager(query);
    },
    searchTournament(_, { query }, { dataSources }) {
      return dataSources.sofaSportAPI.searchTournament(query);
    },
    teamPlayers(_, { team_id }, { dataSources }) {
      return dataSources.sofaSportAPI.teamPlayers(team_id);
    },
    teamRankings(_, { team_id }, { dataSources }) {
      return dataSources.sofaSportAPI.teamRankings(team_id);
    },
    teamLatestMedias(_, { team_id }, { dataSources }) {
      return dataSources.sofaSportAPI.teamLatestMedias(team_id);
    },
    teamEvents(_, { team_id, course_events, page }, { dataSources }) {
      return dataSources.sofaSportAPI.teamEvents(team_id, course_events, page);
    },
    sports(_, {}, { dataSources }) {
      return dataSources.sofaSportAPI.sports();
    },
    sportsNumberLive(_, {}, { dataSources }) {
      return dataSources.sofaSportAPI.sportsNumberLive();
    },
    sportsCatories(_, { sport_id }, { dataSources }) {
      return dataSources.sofaSportAPI.sportsCatories(sport_id);
    },
  },
  Query: {
    sofaSport(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  sofaSportDefs,
  sofaSportResolvers,
};
