const whoisDefs = `#graphql

type Soa {
  expire: Int
  hostmaster: String
  minttl: Int
  nsname: String
  refresh: Int
  retry: Int
  serial: Int
}

type Mx {
  exchange: String
  priority: Int
}

type NsLookupResponse {
  TXT: [String]
  SOA: Soa
  NS: [String]
  MX: [Mx]
  A: [String]
}

type Registrar {
  id: String
  name: String
  email: String
  url: String
  phone: String
}

type Tech {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Admin {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Owner {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Contacts {
  tech: [Tech]
  admin: [Admin]
  owner: [Owner]
}

type DomainInformationResponse {
  server: String
  name: String
  idnName: String
  status: String
  ips: String
  created: String
  changed: String
  expires: String
  registered: Boolean
  dnssec: String
  whoisserver: String
  network: String
  exception: String
  parsedContacts: Boolean
  ask_whois: String
  rawdata: [String]
  registrar: Registrar
  contacts: Contacts
  nameserver: [String]
}

type Registrar {
  id: String
  name: String
  email: String
  url: String
  phone: String
}

type Tech {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Admin {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Owner {
  handle: String
  type: String
  name: String
  organization: String
  email: String
  address: String
  zipcode: String
  city: String
  state: String
  country: String
  phone: String
  fax: String
  created: String
  changed: String
}

type Contacts {
  tech: [Tech]
  admin: [Admin]
  owner: [Owner]
}

type Domian {
  _id: String
  server: String
  name: String
  idnName: String
  status: String
  ips: String
  created: String
  changed: String
  expires: String
  registered: Boolean
  dnssec: String
  whoisserver: String
  network: String
  exception: String
  parsedContacts: Boolean
  ask_whois: String
  whenUpdated: Int
  rawdata: [String]
  registrar: Registrar
  contacts: Contacts
  nameserver: [String]
}

type DomainsFromIpResponse {
  domain: [Domian]
}

# Types with identical fields:
# Tech Admin Owner


# Types with identical fields:
# Tech Admin Owner


# type DomainInformationResponse {
#   type: String
#   properties: Properties
# }

type WhoisNameSpace{
  nslookup(domain: String!): NsLookupResponse
  domainInformation(domain: String!, format: String, forceRefresh: String ): DomainInformationResponse
  domainsFromIp(ip: String!): [Domian]
}

  type Query {
    whois: WhoisNameSpace
  }
`;

const whoisResolvers = {
  WhoisNameSpace: {
    nslookup(_, { domain }, { dataSources }) {
      return dataSources.whois.nsLookup(domain);
    },
    domainInformation(_, { domain, format, forceRefresh }, { dataSources }) {
      return dataSources.whois.domainInformation(domain, format, forceRefresh);
    },
    domainsFromIp(_, { ip }, { dataSources }) {
      return dataSources.whois.domainsFromIp(ip);
    },
  },
  Query: {
    whois(_, { domain }, { dataSources }) {
      return {};
    },
  },
};

module.exports = {
  whoisDefs,
  whoisResolvers,
};
