const yahooFinanceDefs = `#graphql

enum Region {
  ASIA
  EU
  US
  BR
  AU
  CA
  FR
  DE
  HK
  IN
  IT
  ES
  GB
  SG
  }

type PageViews {
  midTermTrend: String
  longTermTrend: String
  shortTermTrend: String
}

type Quarterly {
  date: String
  revenue: Int
  earnings: Int
}

type Yearly {
  date: Int
  revenue: Int
  earnings: Int
}

type FinancialsChart {
  quarterly: [Quarterly]
  yearly: [Yearly]
}

type EarningsChart {
  currentQuarterEstimate: Float
  currentQuarterEstimateDate: String
  currentQuarterEstimateYear: Int
  earningsDate: [Int]
  quarterly: [Quarterly]
}

type Earnings {
  maxAge: Int
  financialCurrency: String
  financialsChart: FinancialsChart
  earningsChart: EarningsChart
}

type QuoteSummary {
  earnings: Earnings
}

type QuoteResult {
  language: String
  region: String
  quoteType: String
  typeDisp: String
  quoteSourceName: String
  triggerable: Boolean
  customPriceAlertConfidence: String
  currency: String
  firstTradeDateMilliseconds: Int
  priceHint: Int
  totalCash: Int
  floatShares: Int
  ebitda: Int
  shortRatio: Float
  preMarketChange: Float
  preMarketChangePercent: Float
  esgPopulated: Boolean
  tradeable: Boolean
  cryptoTradeable: Boolean
  preMarketTime: Int
  targetPriceHigh: Float
  targetPriceLow: Float
  targetPriceMean: Float
  targetPriceMedian: Float
  preMarketPrice: Float
  heldPercentInsiders: Float
  heldPercentInstitutions: Float
  postMarketChangePercent: Float
  postMarketTime: Int
  postMarketPrice: Float
  postMarketChange: Float
  regularMarketChange: Float
  regularMarketChangePercent: Float
  regularMarketTime: Int
  regularMarketPrice: Float
  regularMarketDayHigh: Float
  regularMarketDayRange: String
  regularMarketDayLow: Float
  regularMarketVolume: Int
  sharesShort: Int
  sharesShortPrevMonth: Int
  shortPercentFloat: Float
  regularMarketPreviousClose: Float
  bid: Float
  ask: Float
  bidSize: Int
  askSize: Int
  exchange: String
  market: String
  messageBoardId: String
  fullExchangeName: String
  shortName: String
  longName: String
  regularMarketOpen: Float
  averageDailyVolume3Month: Int
  averageDailyVolume10Day: Int
  beta: Float
  fiftyTwoWeekLowChange: Float
  fiftyTwoWeekLowChangePercent: Float
  fiftyTwoWeekRange: String
  fiftyTwoWeekHighChange: Float
  fiftyTwoWeekHighChangePercent: Float
  fiftyTwoWeekLow: Float
  fiftyTwoWeekHigh: Float
  exDividendDate: Int
  earningsTimestamp: Int
  earningsTimestampStart: Int
  earningsTimestampEnd: Int
  trailingAnnualDividendRate: Int
  pegRatio: Float
  trailingAnnualDividendYield: Int
  dividendYield: Float
  revenue: Int
  priceToSales: Float
  marketState: String
  epsTrailingTwelveMonths: Float
  epsForward: Float
  epsCurrentYear: Float
  epsNextQuarter: Float
  priceEpsCurrentYear: Float
  priceEpsNextQuarter: Float
  sharesOutstanding: Int
  bookValue: Float
  fiftyDayAverage: Float
  fiftyDayAverageChange: Float
  fiftyDayAverageChangePercent: Float
  twoHundredDayAverage: Float
  twoHundredDayAverageChange: Float
  twoHundredDayAverageChangePercent: Float
  marketCap: Int
  forwardPE: Float
  priceToBook: Float
  sourceInterval: Int
  exchangeDataDelayedBy: Int
  exchangeTimezoneName: String
  exchangeTimezoneShortName: String
  gmtOffSetMilliseconds: Int
  symbol: String
  pageViews: PageViews
  components: [String]
  quoteSummary: QuoteSummary
}

type QuoteResponse {
  error: String
  result: [QuoteResult]
}

type MarketQuoteResponse {
  quoteResponse: QuoteResponse
}

type Quotes {
  language: String
  region: String
  quoteType: String
  typeDisp: String
  quoteSourceName: String
  triggerable: Boolean
  customPriceAlertConfidence: String
  exchange: String
  firstTradeDateMilliseconds: Int
  priceHint: Int
  market: String
  fullExchangeName: String
  marketState: String
  sourceInterval: Int
  exchangeDataDelayedBy: Int
  exchangeTimezoneName: String
  exchangeTimezoneShortName: String
  gmtOffSetMilliseconds: Int
  esgPopulated: Boolean
  tradeable: Boolean
  cryptoTradeable: Boolean
  symbol: String
}

type Criteria {
  field: String
  dependentValues: [String]
  labelsSelected: [String]
  values: [Int]
  operators: [String]
}

type CriteriaMeta {
  size: Int
  offset: Int
  sortField: String
  sortType: String
  quoteType: String
  topOperator: String
  criteria: [Criteria]
}

type FinanceResult {
  id: String
  title: String
  description: String
  canonicalName: String
  rawCriteria: String
  start: Int
  count: Int
  total: Int
  useRecords: Boolean
  predefinedScr: Boolean
  versionId: Int
  creationDate: Int
  lastUpdated: Int
  isPremium: Boolean
  iconUrl: String
  quotes: [Quotes]
  criteriaMeta: CriteriaMeta
}

type Finance {
  error: String
  result: [FinanceResult]
}

type MarketMoversResponse {
  finance: Finance
}

type RegularMarketPreviousClose {
  raw: Float
  fmt: String
}

type Spark {
  dataGranularity: Int
  symbol: String
  end: Int
  previousClose: Float
  chartPreviousClose: Float
  start: Int
  close: [Int]
  timestamp: [Int]
}

type RegularMarketTime {
  raw: Int
  fmt: String
}

type Result {
  fullExchangeName: String
  exchangeTimezoneName: String
  symbol: String
  gmtOffSetMilliseconds: Int
  cryptoTradeable: Boolean
  exchangeDataDelayedBy: Int
  firstTradeDateMilliseconds: Int
  language: String
  exchangeTimezoneShortName: String
  quoteType: String
  customPriceAlertConfidence: String
  marketState: String
  market: String
  priceHint: Int
  tradeable: Boolean
  exchange: String
  sourceInterval: Int
  shortName: String
  region: String
  triggerable: Boolean
  regularMarketPreviousClose: RegularMarketPreviousClose
  spark: Spark
  regularMarketTime: RegularMarketTime
}

type MarketSummaryAndSparkResponse {
  error: String
  result: [Result]
}

type MarketSummaryResponse {
  marketSummaryAndSparkResponse: MarketSummaryAndSparkResponse
}

type MarketEarningsResult {
  earnings: Boolean
  ticker: String
  companyShortName: String
  startDateTime: Int
  startDateTimeType: String
  epsActual: Float
  epsEstimate: Float
  surprisePercent: Int
  rank: Int
}

type MarketEarningsFinance {
  error: String
  result: [MarketEarningsResult]
}

type MarketEarningsResponse {
  finance: Finance
}

type MarketTrendingTickersQuotes {
  language: String
  region: String
  quoteType: String
  typeDisp: String
  quoteSourceName: String
  triggerable: Boolean
  customPriceAlertConfidence: String
  trendingScore: Float
  firstTradeDateMilliseconds: Int
  priceHint: Int
  regularMarketChange: Float
  regularMarketChangePercent: Float
  regularMarketTime: Int
  regularMarketPrice: Float
  regularMarketPreviousClose: Float
  exchange: String
  market: String
  fullExchangeName: String
  shortName: String
  longName: String
  marketState: String
  sourceInterval: Int
  exchangeDataDelayedBy: Int
  exchangeTimezoneName: String
  exchangeTimezoneShortName: String
  gmtOffSetMilliseconds: Int
  esgPopulated: Boolean
  tradeable: Boolean
  cryptoTradeable: Boolean
  symbol: String
}

type MarketTrendingTickersResult {
  count: Int
  jobTimestamp: Int
  startInterval: Int
  quotes: [MarketTrendingTickersQuotes]
}

type MarketTrendingTickersFinance {
  error: String
  result: [MarketTrendingTickersResult]
}

type MarketTrendingTickersResponse {
  finance: MarketTrendingTickersFinance
}

type StockRecommendationsQuotes {
  language: String
  region: String
  quoteType: String
  typeDisp: String
  quoteSourceName: String
  triggerable: Boolean
  customPriceAlertConfidence: String
  firstTradeDateMilliseconds: Int
  priceHint: Int
  postMarketChangePercent: Float
  postMarketTime: Int
  postMarketPrice: Float
  postMarketChange: Float
  regularMarketChange: Float
  regularMarketChangePercent: Float
  regularMarketTime: Int
  regularMarketPrice: Float
  regularMarketPreviousClose: Float
  exchange: String
  market: String
  fullExchangeName: String
  shortName: String
  marketState: String
  sourceInterval: Int
  exchangeDataDelayedBy: Int
  exchangeTimezoneName: String
  exchangeTimezoneShortName: String
  gmtOffSetMilliseconds: Int
  esgPopulated: Boolean
  tradeable: Boolean
  cryptoTradeable: Boolean
  symbol: String
}

type StockRecommendationsResult {
  count: Int
  quotes: [StockRecommendationsQuotes]
}

type StockRecommendationsFinance {
  error: String
  result: [StockRecommendationsResult]
}

type StockRecommendationsResponse {
  finance: Finance
}

type RegularMarketChangePercent {
  raw: Float
  fmt: String
}

type FiftyTwoWeekLow {
  raw: Float
  fmt: String
}

type FiftyTwoWeekHighChangePercent {
  raw: Float
  fmt: String
}

type FiftyTwoWeekHigh {
  raw: Float
  fmt: String
}

type RegularMarketDayRange {
  raw: String
  fmt: String
}

type FiftyTwoWeekLowChangePercent {
  raw: Float
  fmt: String
}

type MarketCap {
  raw: Int
  fmt: String
  longFmt: String
}

type RegularMarketVolume {
  raw: Int
  fmt: String
  longFmt: String
}

type RegularMarketPrice {
  raw: Float
  fmt: String
}

type RegularMarketDayLow {
  raw: Float
  fmt: String
}

type FiftyTwoWeekLowChange {
  raw: Float
  fmt: String
}

type FiftyTwoWeekHighChange {
  raw: Float
  fmt: String
}

type RegularMarketPreviousClose {
  raw: Float
  fmt: String
}

type RegularMarketChange {
  raw: Float
  fmt: String
}

type RegularMarketDayHigh {
  raw: Float
  fmt: String
}

type SharesOutstanding {
  raw: Int
  fmt: String
  longFmt: String
}

type FiftyTwoWeekRange {
  raw: String
  fmt: String
}

type RegularMarketTime {
  raw: Int
  fmt: String
}

type RegularMarketOpen {
  raw: Float
  fmt: String
}

type RecommendedSimilarSymbols {
  INTC: [Intc]
}

type Intc {
  sourceInterval: Int
  quoteSourceName: String
  exchange: String
  shortName: String
  longName: String
  exchangeTimezoneName: String
  exchangeTimezoneShortName: String
  exchangeDataDelayedBy: Int
  customPriceAlertConfidence: String
  priceHint: Int
  currency: String
  isLoading: Boolean
  score: Float
  triggerable: Boolean
  gmtOffSetMilliseconds: Int
  firstTradeDateMilliseconds: Int
  region: String
  marketState: String
  quoteType: String
  invalid: Boolean
  symbol: String
  language: String
  messageBoardId: String
  uuid: String
  market: String
  typeDisp: String
  cryptoTradeable: Boolean
  fullExchangeName: String
  tradeable: Boolean
  regularMarketChangePercent: RegularMarketChangePercent
  fiftyTwoWeekLow: FiftyTwoWeekLow
  fiftyTwoWeekHighChangePercent: FiftyTwoWeekHighChangePercent
  fiftyTwoWeekHigh: FiftyTwoWeekHigh
  regularMarketDayRange: RegularMarketDayRange
  fiftyTwoWeekLowChangePercent: FiftyTwoWeekLowChangePercent
  corporateActions: [String]
  marketCap: MarketCap
  regularMarketVolume: RegularMarketVolume
  regularMarketPrice: RegularMarketPrice
  regularMarketDayLow: RegularMarketDayLow
  fiftyTwoWeekLowChange: FiftyTwoWeekLowChange
  fiftyTwoWeekHighChange: FiftyTwoWeekHighChange
  regularMarketPreviousClose: RegularMarketPreviousClose
  regularMarketChange: RegularMarketChange
  regularMarketDayHigh: RegularMarketDayHigh
  sharesOutstanding: SharesOutstanding
  fiftyTwoWeekRange: FiftyTwoWeekRange
  regularMarketTime: RegularMarketTime
  regularMarketOpen: RegularMarketOpen
}

type RecommendedSymbols {
  INTC: [Intc]
}

type StockSimilaritiesResponse {
  errorList: [String]
  recommendedSimilarSymbols: RecommendedSimilarSymbols
  recommendedSymbols: RecommendedSymbols
}

# Types with identical fields:
# RegularMarketChangePercent FiftyTwoWeekLow FiftyTwoWeekHighChangePercent FiftyTwoWeekHigh FiftyTwoWeekLowChangePercent RegularMarketPrice RegularMarketDayLow FiftyTwoWeekLowChange FiftyTwoWeekHighChange RegularMarketPreviousClose RegularMarketChange RegularMarketDayHigh RegularMarketOpen
# RegularMarketDayRange FiftyTwoWeekRange
# MarketCap RegularMarketVolume SharesOutstanding
# RecommendedSimilarSymbols RecommendedSymbols


type History {
  epochGradeDate: Int
  firm: String
  toGrade: String
  fromGrade: String
  action: String
}

type UpgradeDowngradeHistory {
  maxAge: Int
  history: [History]
}

type StockUpgradeDowngradeHistoryResult {
  upgradeDowngradeHistory: UpgradeDowngradeHistory
}

type StockUpgradeDowngradeHistoryQuoteSummary {
  error: String
  result: [StockUpgradeDowngradeHistoryResult]
}

type StockUpgradeDowngradeHistoryResponse {
  quoteSummary: StockUpgradeDowngradeHistoryQuoteSummary
}

type StockChartAdjclose {
  adjclose: [Int]
}

type StockChartQuote {
  volume: [Int]
  high: [Float]
  close: [Int]
  open: [Float]
  low: [Float]
}

type StockChartIndicators {
  adjclose: [StockChartAdjclose]
  quote: [StockChartQuote]
}

type StockChartPost {
  timezone: String
  start: Int
  end: Int
  gmtoffset: Int
}

type StockChartRegular {
  timezone: String
  start: Int
  end: Int
  gmtoffset: Int
}

type StockChartPre {
  timezone: String
  start: Int
  end: Int
  gmtoffset: Int
}

type StockChartCurrentTradingPeriod {
  post: StockChartPost
  regular: StockChartRegular
  pre: StockChartPre
}

type StockChartMeta {
  currency: String
  symbol: String
  exchangeName: String
  instrumentType: String
  firstTradeDate: Int
  regularMarketTime: Int
  gmtoffset: Int
  timezone: String
  exchangeTimezoneName: String
  regularMarketPrice: Float
  chartPreviousClose: Float
  priceHint: Int
  dataGranularity: String
  range: String
  validRanges: [String]
  currentTradingPeriod: StockChartCurrentTradingPeriod
}

type StockChartResult {
  indicators: StockChartIndicators
  timestamp: [Int]
  meta: StockChartMeta
}

type StockChart {
  error: String
  result: [StockChartResult]
}

type StockChartResponse {
  chart: StockChart
}

# Types with identical fields:
# Post Regular Pre

# 1m|2m|5m|15m|30m|60m|1d|1wk|1mo
enum StockChartInterval {
  M_1
  M_2
  M_5
  M_15
  M_30
  M_60
  D_1
  WK_1
  MO_1
}

# 1d|5d|1mo|3mo|6mo|1y|2y|5y|10y|ytd|max
enum StockChartRange {
  D_1
  D_5
  MO_1
  MO_3
  MO_6
  Y_1
  Y_2
  Y_5
  Y_10
  YTD
  MAX
}

type TimeZone {
  gmtOffset: Int
}

type StockHistoricalDataPrices {
  date: Int
  open: Float
  high: Float
  low: Float
  close: Float
  volume: Int
  adjclose: Float
}

type StockHistoricalDataResponse {
  isPending: Boolean
  firstTradeDate: Int
  id: String
  eventsData: [String]
  timeZone: TimeZone
  prices: [StockHistoricalDataPrices]
}

type StockSummaryProfile {
  address1: String
  address2: String
  city: String
  zip: String
  country: String
  phone: String
  website: String
  industry: String
  industryKey: String
  industryDisp: String
  sector: String
  sectorKey: String
  sectorDisp: String
  longBusinessSummary: String
  fullTimeEmployees: Int
  maxAge: Int
  companyOfficers: [String]
}

type StockProfileResult {
  summaryProfile: StockSummaryProfile
}

type StockProfileQuoteSummary {
  error: String
  result: [StockProfileResult]
}

type StockProfileResponse {
  quoteSummary: StockProfileQuoteSummary
}

type StockTimeSeriesMeta {
  type: [String]
  symbol: [String]
}

type StockTimeSeriesResult {
  meta: StockTimeSeriesMeta
}

type StockTimeSeries {
  error: String
  result: [StockTimeSeriesResult]
}

type StockTimeSeriesResponse {
  timeseries: StockTimeSeries
}

type Revenue {
  raw: Int
  fmt: String
  longFmt: String
}

type FinancialsChart {
  quarterly: [Quarterly]
  yearly: [Yearly]
}

type EarningsDate {
  raw: Int
  fmt: String
}

type CurrentQuarterEstimate {
  raw: Float
  fmt: String
}

type Estimate {
  raw: Float
  fmt: String
}

type Actual {
  raw: Float
  fmt: String
}

type Earnings {
  maxAge: Int
  financialCurrency: String
  financialsChart: FinancialsChart
  earningsChart: EarningsChart
}

type StockEarningsResult {
  earnings: Earnings
}

type StockEarningsQuoteSummary {
  error: String
  result: [StockEarningsResult]
}

type StockEarningsResponse {
  quoteSummary: StockEarningsQuoteSummary
}

# Types with identical fields:
# CurrentQuarterEstimate Estimate Actual


type SecReports {
  id: String
  type: String
  title: String
  description: String
  filingDate: Int
  snapshotUrl: String
  formType: String
}

type SigDevs {
  headline: String
  date: String
}

type Reports {
  id: String
  headHtml: String
  provider: String
  reportDate: String
  reportTitle: String
  tickers: [String]
}

type Events {
  eventType: String
  pricePeriod: String
  tradingHorizon: String
  tradeType: String
  imageUrl: String
  startDate: Int
  endDate: Int
}

type ResearchReports {
  reportId: String
  provider: String
  title: String
  reportDate: String
  summary: String
  investmentRating: String
}

type UpsellSearchDd {
  researchReports: ResearchReports
}

type Upsell {
  companyName: String
  msBullishBearishSummariesPublishDate: Int
  upsellReportType: String
  msBearishSummary: [String]
  msBullishSummary: [String]
}

type Recommendation {
  targetPrice: Int
  provider: String
  rating: String
}

type Sector {
  innovativeness: Float
  hiring: Float
  sustainability: Float
  insiderSentiments: Float
  earningsReports: Float
  dividends: Float
}

type Company {
  innovativeness: Float
  hiring: Float
  sustainability: Float
  insiderSentiments: Float
  earningsReports: Float
  dividends: Float
}

type CompanySnapshot {
  sectorInfo: String
  sector: Sector
  company: Company
}

type Valuation {
  color: Float
  description: String
  discount: String
  provider: String
}

type KeyTechnicals {
  provider: String
  support: Float
  resistance: Float
  stopLoss: Float
}

type LongTermOutlook {
  stateDescription: String
  direction: String
  score: Int
  scoreDescription: String
  sectorDirection: String
  sectorScore: Int
  sectorScoreDescription: String
  indexDirection: String
  indexScore: Int
  indexScoreDescription: String
}

type IntermediateTermOutlook {
  stateDescription: String
  direction: String
  score: Int
  scoreDescription: String
  sectorDirection: String
  sectorScore: Int
  sectorScoreDescription: String
  indexDirection: String
  indexScore: Int
  indexScoreDescription: String
}

type ShortTermOutlook {
  stateDescription: String
  direction: String
  score: Int
  scoreDescription: String
  sectorDirection: String
  sectorScore: Int
  sectorScoreDescription: String
  indexDirection: String
  indexScore: Int
  indexScoreDescription: String
}

type TechnicalEvents {
  provider: String
  sector: String
  longTermOutlook: LongTermOutlook
  intermediateTermOutlook: IntermediateTermOutlook
  shortTermOutlook: ShortTermOutlook
}

type InstrumentInfo {
  valuation: Valuation
  keyTechnicals: KeyTechnicals
  technicalEvents: TechnicalEvents
}

type StockInsightsResult {
  symbol: String
  secReports: [SecReports]
  sigDevs: [SigDevs]
  reports: [Reports]
  events: [Events]
  upsellSearchDD: UpsellSearchDd
  upsell: Upsell
  recommendation: Recommendation
  companySnapshot: CompanySnapshot
  instrumentInfo: InstrumentInfo
}

type StockInsightsFinance {
  error: String
  result: StockInsightsResult
}

type StockInsightsResponse {
  finance: StockInsightsFinance
}

# Types with identical fields:
# Sector Company
# LongTermOutlook IntermediateTermOutlook ShortTermOutlook

type Percentile {
  raw: Float
  fmt: String
}

type PeerHighestControversyPerformance {
  min: Int
  avg: Float
  max: Int
}

type PeerEnvironmentPerformance {
  min: Float
  avg: Float
  max: Float
}

type PeerSocialPerformance {
  min: Float
  avg: Float
  max: Float
}

type PeerGovernancePerformance {
  min: Float
  avg: Float
  max: Float
}

type PeerEsgScorePerformance {
  min: Float
  avg: Float
  max: Float
}

type GovernanceScore {
  raw: Float
  fmt: String
}

type SocialScore {
  raw: Float
  fmt: String
}

type EnvironmentScore {
  raw: Float
  fmt: String
}

type TotalEsg {
  raw: Float
  fmt: String
}

type EsgScores {
  maxAge: Int
  ratingYear: Int
  ratingMonth: Int
  highestControversy: Int
  peerCount: Int
  esgPerformance: String
  peerGroup: String
  environmentPercentile: String
  socialPercentile: String
  governancePercentile: String
  adult: Boolean
  alcoholic: Boolean
  animalTesting: Boolean
  catholic: Boolean
  controversialWeapons: Boolean
  smallArms: Boolean
  furLeather: Boolean
  gambling: Boolean
  gmo: Boolean
  militaryContract: Boolean
  nuclear: Boolean
  pesticides: Boolean
  palmOil: Boolean
  coal: Boolean
  tobacco: Boolean
  percentile: Percentile
  peerHighestControversyPerformance: PeerHighestControversyPerformance
  peerEnvironmentPerformance: PeerEnvironmentPerformance
  peerSocialPerformance: PeerSocialPerformance
  peerGovernancePerformance: PeerGovernancePerformance
  peerEsgScorePerformance: PeerEsgScorePerformance
  relatedControversy: [String]
  governanceScore: GovernanceScore
  socialScore: SocialScore
  environmentScore: EnvironmentScore
  totalEsg: TotalEsg
}

type StockESGScoresResult {
  esgScores: EsgScores
}

type StockESGScoresQuoteSummary {
  error: String
  result: [StockESGScoresResult]
}

type StockESGScoresResponse {
  quoteSummary: StockESGScoresQuoteSummary
}

# Types with identical fields:
# Percentile GovernanceScore SocialScore EnvironmentScore TotalEsg
# PeerEnvironmentPerformance PeerSocialPerformance PeerGovernancePerformance PeerEsgScorePerformance

type StockCompanyOutlookSummary {
  innovationTrend: String
  innovationScore: Int
  innovationPerformance: String
}

type SignificantDevelopments {
  id: Int
  symbol: String
  date: String
  headline: String
}

type Innovations {
  score: Int
  text: String
  sectorAvg: Float
}

type MetaData {
  symbol: String
}

type StockCompanyOutlookResult {
  companyOutlookSummary: StockCompanyOutlookSummary
  significantDevelopments: [SignificantDevelopments]
  innovations: Innovations
  metaData: MetaData
}

type StockCompanyOutlookFinance {
  error: String
  result: StockCompanyOutlookResult
}

type StockCompanyOutlookResponse {
  finance: StockCompanyOutlookFinance
}

type YahooFinanceNameSpace {
  getMarketQuote(region: Region, symbol: String!): MarketQuoteResponse
  getMarketMovers(region: Region, lang: String, count: Int, start: Int): MarketMoversResponse
  getMarketSummary(region: Region): MarketSummaryResponse
  getMarketEarnings(region: Region!, startDate: Int, endDate: Int, size: Int): MarketEarningsResponse
  getMarketTrendingTickers(region: Region!): MarketTrendingTickersResponse
  getStockRecommendations(symbol: String!): StockRecommendationsResponse
  getStockSimilarities(symbol: String!): StockSimilaritiesResponse
  getStockUpgradeDowngradeHistory(symbol: String!, region:Region, lang:String): StockUpgradeDowngradeHistoryResponse
  getStockChart(interval: StockChartInterval, symbol: String!, range: StockChartRange, region: Region, comparisons: String, includePrePost: Boolean, useYfid: Boolean, includeAdjustedClose: Boolean, events: String): StockChartResponse
  getStockHistoricalData(symbol: String, region: Region): StockHistoricalDataResponse
  getStockSummaryProfile(symbol: String, region: Region, lang: String): StockProfileResponse
  getStockTimeSeries(symbol: String!, period1: Int!, period2: Int!, region: Region): StockTimeSeriesResponse
  getStockEarnings(symbol: String!, region: Region, lang: String): StockEarningsResponse
  getStockInsights(symbol: String!): StockInsightsResponse
  getStockESGScores(symbol: String!, region: Region, lang: String): StockESGScoresResponse
  getStockCompanyOutlook(symbol: String!, region: Region, lang: String): StockCompanyOutlookResponse
}

  type Query {
    yahooFinance: YahooFinanceNameSpace
  }
`;

const yahooFinanceResolvers = {
  YahooFinanceNameSpace: {
    getMarketQuote(_, { region, symbol }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getMarketQuote(region, symbol);
    },
    getMarketMovers(_, { region, lang, count, start }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getMarketMovers(
        region,
        lang,
        count,
        start
      );
    },
    getMarketSummary(_, { region }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getMarketSummary(region);
    },
    getMarketEarnings(
      _,
      { region, startDate, endDate, size },
      { dataSources }
    ) {
      return dataSources.yahooFinanceAPI.getMarketEarnings(
        region,
        startDate,
        endDate,
        size
      );
    },
    getMarketTrendingTickers(_, { region }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getMarketTrendingTickers(region);
    },
    getStockRecommendations(_, { symbol }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockRecommendations(symbol);
    },
    getStockSimilarities(_, { symbol }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockSimilarities(symbol);
    },
    getStockUpgradeDowngradeHistory(
      _,
      { symbol, region, lang },
      { dataSources }
    ) {
      return dataSources.yahooFinanceAPI.getStockUpgradeDowngradeHistory(
        symbol,
        region,
        lang
      );
    },
    getStockChart(
      _,
      {
        interval,
        symbol,
        range,
        region,
        comparisons,
        includePrePost,
        useYfid,
        includeAdjustedClose,
        events,
      },
      { dataSources }
    ) {
      return dataSources.yahooFinanceAPI.getStockChart(
        interval,
        symbol,
        range,
        region,
        comparisons,
        includePrePost,
        useYfid,
        includeAdjustedClose,
        events
      );
    },
    getStockHistoricalData(_, { symbol, region }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockHistoricalData(symbol, region);
    },
    getStockSummaryProfile(_, { symbol, region, lang }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockSummaryProfile(
        symbol,
        region,
        lang
      );
    },
    getStockTimeSeries(
      _,
      { symbol, period1, period2, region },
      { dataSources }
    ) {
      return dataSources.yahooFinanceAPI.getStockTimeSeries(
        symbol,
        period1,
        period2,
        region
      );
    },
    getStockEarnings(_, { symbol, region, lang }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockEarnings(symbol, region, lang);
    },
    getStockInsights(_, { symbol }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockInsights(symbol);
    },
    getStockESGScores(_, { symbol, region, lang }, { dataSources }) {
      return dataSources.yahooFinanceAPI.getStockESGScores(
        symbol,
        region,
        lang
      );
    },
  },
  Query: {
    yahooFinance(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  yahooFinanceDefs,
  yahooFinanceResolvers,
};
