/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactUs = /* GraphQL */ `
  subscription OnCreateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onCreateContactUs(filter: $filter) {
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
export const onUpdateContactUs = /* GraphQL */ `
  subscription OnUpdateContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onUpdateContactUs(filter: $filter) {
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
export const onDeleteContactUs = /* GraphQL */ `
  subscription OnDeleteContactUs(
    $filter: ModelSubscriptionContactUsFilterInput
  ) {
    onDeleteContactUs(filter: $filter) {
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
export const onCreateAddressRole = /* GraphQL */ `
  subscription OnCreateAddressRole(
    $filter: ModelSubscriptionAddressRoleFilterInput
  ) {
    onCreateAddressRole(filter: $filter) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAddressRole = /* GraphQL */ `
  subscription OnUpdateAddressRole(
    $filter: ModelSubscriptionAddressRoleFilterInput
  ) {
    onUpdateAddressRole(filter: $filter) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAddressRole = /* GraphQL */ `
  subscription OnDeleteAddressRole(
    $filter: ModelSubscriptionAddressRoleFilterInput
  ) {
    onDeleteAddressRole(filter: $filter) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
