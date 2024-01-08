import { gql } from '@apollo/client'

export const PERSON_ALL_DERTAILS_FRAGMENT = gql`
  fragment PersonDetails on Person {
    id
    name
    phone
    address {
      street
      city
    }
  }
`

export const GET_PERSONS = gql`
  query {
    allPersons {
      ...PersonDetails
    }
  }

  ${PERSON_ALL_DERTAILS_FRAGMENT}
`

export const FIND_PERSON = gql`
  query ($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      ...PersonDetails
    }
  }
`
