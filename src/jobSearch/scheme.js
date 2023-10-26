const jobSearchDefs = `#graphql

# all, today, 3days, week,month
enum DATE_POSTED {
  ALL
  TODAY
  WEEK
  MONTH
}

enum EMPLOYMENT_TYPES {
  FULL_TIME
  CONTRACTOR
  PARTTIME
  INTERN
}

enum JOB_REQUIREMENTS {
  UNDER_3_YEARS_EXPERIENCE
  MORE_THAN_3_YEARS_EXPERIENCE
  NO_EXPERIENCE
  NO_DEGREE
}

type JobHighlights {
  Benefits: [String]
  Responsibilities: [String]
  Qualifications: [String]
}

type JobRequiredEducation {
  postgraduate_degree: Boolean
  professional_certification: Boolean
  high_school: Boolean
  associates_degree: Boolean
  bachelors_degree: Boolean
  degree_mentioned: Boolean
  degree_preferred: Boolean
  professional_certification_mentioned: Boolean
}

type JobRequiredExperience {
  no_experience_required: Boolean
  required_experience_in_months: Int
  experience_mentioned: Boolean
  experience_preferred: Boolean
}

type ApplyOptions {
  publisher: String
  apply_link: String
  is_direct: Boolean
}

type JobSearchData {
  employer_name: String
  employer_logo: String
  employer_website: String
  employer_company_type: String
  job_publisher: String
  job_id: String
  job_employment_type: String
  job_title: String
  job_apply_link: String
  job_apply_is_direct: Boolean
  job_apply_quality_score: Float
  job_description: String
  job_is_remote: Boolean
  job_posted_at_timestamp: Int
  job_posted_at_datetime_utc: String
  job_city: String
  job_state: String
  job_country: String
  job_latitude: Float
  job_longitude: Float
  job_google_link: String
  job_offer_expiration_datetime_utc: String
  job_offer_expiration_timestamp: Int
  job_required_skills: String
  job_experience_in_place_of_education: Boolean
  job_min_salary: String
  job_max_salary: String
  job_salary_currency: String
  job_salary_period: String
  job_job_title: String
  job_posting_language: String
  job_onet_soc: String
  job_onet_job_zone: String
  job_occupational_categories: [String]
  job_highlights: JobHighlights
  job_required_education: JobRequiredEducation
  job_required_experience: JobRequiredExperience
  job_benefits: [String]
  apply_options: [ApplyOptions]
}

type JobSearchParameters {
  query: String
  page: Int
  num_pages: Int
}

type JobSearchResponse {
  status: String
  request_id: String
  data: [JobSearchData]
  parameters: JobSearchParameters
}

type JobRequirements {
  name: String
  value: String
  est_count: Int
}

type EmploymentTypes {
  name: String
  value: String
  est_count: Int
}

type DatePosted {
  name: String
  value: String
  est_count: Int
}

type Employers {
  name: String
  value: String
  est_count: Int
}

type CompanyTypes {
  name: String
  value: String
  est_count: Int
}

type JobTitles {
  name: String
  value: String
  est_count: Int
}

type JobSearchFilterData {
  job_requirements: [JobRequirements]
  employment_types: [EmploymentTypes]
  date_posted: [DatePosted]
  employers: [Employers]
  company_types: [CompanyTypes]
  job_titles: [JobTitles]
  categories: [String]
}

type JobSearchFilterParameters {
  query: String
}

type JobSearchFilterResponse {
  status: String
  request_id: String
  data: JobSearchFilterData
  parameters: JobSearchFilterParameters
}


type JobDetailData {
  employer_name: String
  employer_logo: String
  employer_website: String
  employer_company_type: String
  job_publisher: String
  job_id: String
  job_employment_type: String
  job_title: String
  job_apply_link: String
  job_apply_is_direct: Boolean
  job_apply_quality_score: Float
  job_description: String
  job_is_remote: Boolean
  job_posted_at_timestamp: Int
  job_posted_at_datetime_utc: String
  job_city: String
  job_state: String
  job_country: String
  job_latitude: Float
  job_longitude: Float
  job_google_link: String
  job_offer_expiration_datetime_utc: String
  job_offer_expiration_timestamp: Int
  job_required_skills: String
  job_experience_in_place_of_education: Boolean
  job_min_salary: String
  job_max_salary: String
  job_salary_currency: String
  job_salary_period: String
  job_job_title: String
  job_posting_language: String
  job_onet_soc: String
  job_onet_job_zone: String
  employer_reviews: [String]
  apply_options: [ApplyOptions]
  estimated_salaries: [String]
  job_occupational_categories: [String]
  job_highlights: JobHighlights
  job_required_education: JobRequiredEducation
  job_required_experience: JobRequiredExperience
  job_benefits: [String]
}

type JobDetailParameters {
  job_id: String
  extended_publisher_details: Boolean
}

type JobDetailResponse {
  status: String
  request_id: String
  data: [JobDetailData]
  parameters: JobDetailParameters
}

type EstimatedSalaryData {
  location: String
  job_title: String
  publisher_name: String
  publisher_link: String
  min_salary: Int
  max_salary: Int
  median_salary: Int
  salary_period: String
  salary_currency: String
}

type EstimatedSalaryParameters {
  job_title: String
  location: String
  radius: Int
}

type EstimatedSalaryResponse {
  status: String
  request_id: String
  data: [EstimatedSalaryData]
  parameters: EstimatedSalaryParameters
}



# type DomainInformationResponse {
#   type: String
#   properties: Properties
# }

type JobSearchNameSpace{
  search(query: String, page: Int, num_pages: Int): JobSearchResponse
  searchFilters(
    query: String!,
    date_posted: DATE_POSTED,
    remote_jobs_only: Boolean,
    employment_types: EMPLOYMENT_TYPES,
    job_requirements: JOB_REQUIREMENTS,
    radius: Int,
    country: String
  ): JobSearchFilterResponse
  jobDetails(job_id: String!, extended_publisher_details: Boolean): JobDetailResponse
  estimatedSalary(job_title: String!, location: String!, radius: Int): EstimatedSalaryResponse
}

  type Query {
    jobSearch: JobSearchNameSpace
  }
`;

// const jobSearchResolvers = {
const jobSearchResolvers = {
  JobSearchNameSpace: {
    search(_, { query, page, num_pages }, { dataSources }) {
      return dataSources.jobSearchAPI.search(query, page, num_pages);
    },
    searchFilters(
      _,
      {
        query,
        date_posted,
        remote_jobs_only,
        employment_types,
        job_requirements,
        radius,
        country,
      },
      { dataSources }
    ) {
      return dataSources.jobSearchAPI.searchFilters(
        query,
        date_posted,
        remote_jobs_only,
        employment_types,
        job_requirements,
        radius,
        country
      );
    },
    jobDetails(_, { job_id, extended_publisher_details }, { dataSources }) {
      return dataSources.jobSearchAPI.jobDetails(
        job_id,
        extended_publisher_details
      );
    },
    estimatedSalary(_, { job_title, location, radius }, { dataSources }) {
      return dataSources.jobSearchAPI.estimatedSalary(
        job_title,
        location,
        radius
      );
    },
  },
  Query: {
    jobSearch(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  jobSearchDefs,
  jobSearchResolvers,
};
