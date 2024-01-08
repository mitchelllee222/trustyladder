/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $input: CreateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    createContactUs(input: $input, condition: $condition) {
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
export const updateContactUs = /* GraphQL */ `
  mutation UpdateContactUs(
    $input: UpdateContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    updateContactUs(input: $input, condition: $condition) {
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
export const deleteContactUs = /* GraphQL */ `
  mutation DeleteContactUs(
    $input: DeleteContactUsInput!
    $condition: ModelContactUsConditionInput
  ) {
    deleteContactUs(input: $input, condition: $condition) {
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
export const createAddressRole = /* GraphQL */ `
  mutation CreateAddressRole(
    $input: CreateAddressRoleInput!
    $condition: ModelAddressRoleConditionInput
  ) {
    createAddressRole(input: $input, condition: $condition) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAddressRole = /* GraphQL */ `
  mutation UpdateAddressRole(
    $input: UpdateAddressRoleInput!
    $condition: ModelAddressRoleConditionInput
  ) {
    updateAddressRole(input: $input, condition: $condition) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAddressRole = /* GraphQL */ `
  mutation DeleteAddressRole(
    $input: DeleteAddressRoleInput!
    $condition: ModelAddressRoleConditionInput
  ) {
    deleteAddressRole(input: $input, condition: $condition) {
      id
      addressRole
      addressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
