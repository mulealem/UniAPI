const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://sofasport.p.rapidapi.com/v1/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "sofasport.p.rapidapi.com",
};

module.exports = class SofaSportAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async suggest(query) {
    const data = await this.get("search/suggest", {
      params: {
        query: query,
      },
      headers: headers,
    });
    return data;
  }

  async searchPlayer(query) {
    const data = await this.get("search/multi", {
      params: {
        query: query,
        group: "players",
      },
      headers: headers,
    });
    return data;
  }

  async searchTeam(query) {
    const data = await this.get("search/multi", {
      params: {
        query: query,
        group: "teams",
      },
      headers: headers,
    });
    return data;
  }

  async searchReferee(query) {
    const data = await this.get("search/multi", {
      params: {
        query: query,
        group: "referees",
      },
      headers: headers,
    });
    return data;
  }

  async searchManager(query) {
    const data = await this.get("search/multi", {
      params: {
        query: query,
        group: "managers",
      },
      headers: headers,
    });
    return data;
  }

  async searchTournament(query) {
    const data = await this.get("search/multi", {
      params: {
        query: query,
        group: "unique-tournaments",
      },
      headers: headers,
    });
    return data;
  }

  async teamPlayers(team_id) {
    const data = await this.get(`teams/players`, {
      params: {
        team_id: team_id,
      },
      headers: headers,
    });
    return data;
  }

  async teamRankings(team_id) {
    const data = await this.get(`teams/rankings`, {
      params: {
        team_id: team_id,
      },
      headers: headers,
    });
    return data;
  }

  async teamLatestMedias(team_id) {
    const data = await this.get(`teams/latest-medias`, {
      params: {
        team_id: team_id,
      },
      headers: headers,
    });
    return data;
  }

  async teamEvents(team_id, course_events = "last", page = "1") {
    const data = await this.get(`teams/events`, {
      params: {
        team_id: team_id,
        course_events: course_events.toLowerCase(),
        page: page,
      },
      headers: headers,
    });
    return data;
  }

  async sports() {
    const data = await this.get(`sports`, {
      headers: headers,
    });
    return data;
  }

  async sportsNumberLive() {
    const data = await this.get(`sports/number-live`, {
      headers: headers,
    });
    return data;
  }

  async sportsCatories(sport_id) {
    const data = await this.get(`categories`, {
      params: {
        sport_id: sport_id,
      },
      headers: headers,
    });
    console.log(data);
    return data;
  }
};
