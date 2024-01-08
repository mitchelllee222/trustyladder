/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContactUs = /* GraphQL */ `
  query GetContactUs($id: ID!) {
    getContactUs(id: $id) {
      id
      firstName
      lastName
      emailAddress
      message
      createdAt
      status
      updatedAt
      __typename
    }
  }
`;
export const listContactuses = /* GraphQL */ `
  query ListContactuses(
    $filter: ModelContactUsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        emailAddress
        message
        createdAt
        status
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddressRole = /* GraphQL */ `
  query GetAddressRole($id: ID!) {
    getAddressRole(id: $id) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAddressRoles = /* GraphQL */ `
  query ListAddressRoles(
    $filter: ModelAddressRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddressRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        addressRole
        addressID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addressRolesByAddressID = /* GraphQL */ `
  query AddressRolesByAddressID(
    $addressID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressRolesByAddressID(
      addressID: $addressID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        addressRole
        addressID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      address1
      address2
      city
      state
      postalCode
      AddressRoles {
        nextToken
        __typename
      }
      companyID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address1
        address2
        city
        state
        postalCode
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addressesByCompanyID = /* GraphQL */ `
  query AddressesByCompanyID(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addressesByCompanyID(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        address1
        address2
        city
        state
        postalCode
        companyID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      companyName
      phoneNumber
      Addresses {
        nextToken
        __typename
      }
      website
      logo
      taxId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyName
        phoneNumber
        website
        logo
        taxId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
