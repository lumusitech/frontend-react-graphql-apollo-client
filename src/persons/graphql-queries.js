import { gql } from '@apollo/client'

export const GET_PERSONS = gql`
  query {
    allPersons {
      name
      id
      address {
        city
      }
    }
  }
`

export const FIND_PERSON = gql`
  query ($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        city
        street
      }
    }
  }
`
