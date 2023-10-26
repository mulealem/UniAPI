const { RESTDataSource } = require("@apollo/datasource-rest");
const API_URL = "https://jsearch.p.rapidapi.com/";

const headers = {
  "X-RapidAPI-Key": process.env.RapidAPI_KEY,
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
};

module.exports = class JobSearchAPI extends RESTDataSource {
  baseURL = API_URL;

  willSendRequest(_path, request) {}

  async search(query, page = "1", num_pages = "1") {
    const data = await this.get("search", {
      params: {
        query: query,
        page: page,
        num_pages: num_pages,
      },
      headers: headers,
    });
    return data;
  }

  async searchFilters(
    query,
    date_posted = "all",
    remote_jobs_only = false,
    employment_types = null,
    job_requirements = null,
    radius = "10",
    country = "us"
  ) {
    const data = await this.get("search-filters", {
      params: {
        query: query,
        date_posted: date_posted.toLowerCase(),
        remote_jobs_only: remote_jobs_only,
        employment_types: employment_types,
        job_requirements:
          job_requirements != null ? job_requirements.toLowerCase() : null,
        radius: radius,
        country: country,
      },
      headers: headers,
    });
    // console.log(data);
    return data;
  }

  async jobDetails(job_id, extended_publisher_details = "false") {
    const data = await this.get("job-details", {
      params: {
        job_id: job_id,
        extended_publisher_details: extended_publisher_details,
      },
      headers: headers,
    });
    return data;
  }

  async estimatedSalary(job_title, location, radius) {
    const data = await this.get("estimated-salary", {
      params: {
        job_title: job_title,
        location: location,
        radius: radius,
      },
      headers: headers,
    });
    return data;
  }

  // async domainInformation(domain, format = "json", forceRefresh = "0") {
  //   const data = await this.get("", {
  //     params: {
  //       domain: domain,
  //       format: format,
  //       _forceRefresh: forceRefresh,
  //     },
  //     headers: headers,
  //   });
  //   return data;
  // }

  // async domainsFromIp(ip) {
  //   const data = await this.get("getDomainsFromIp", {
  //     params: {
  //       ip: ip,
  //     },
  //     headers: headers,
  //   });
  //   // console.log(data);
  //   return data;
  // }

  // async nsLookup(domain) {
  //   const data = await this.get("nslookup", {
  //     params: {
  //       domain: domain,
  //     },
  //     headers: headers,
  //   });
  //   return data;
  // }
};
