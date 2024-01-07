import { gql } from '@apollo/client'

export const CREATE_PERSON = gql`
  mutation ($name: String!, $street: String!, $city: String!) {
    addPerson(name: $name, street: $street, city: $city) {
      name
      phone
      address {
        city
        street
      }
      id
    }
  }
`

export const EDIT_NUMBER = gql`
  mutation EditNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      address {
        city
        street
      }
      id
    }
  }
`
