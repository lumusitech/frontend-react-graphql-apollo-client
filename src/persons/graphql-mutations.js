import { gql } from '@apollo/client'
import { PERSON_ALL_DERTAILS_FRAGMENT } from './graphql-queries'

export const CREATE_PERSON = gql`
  mutation ($name: String!, $street: String!, $city: String!) {
    addPerson(name: $name, street: $street, city: $city) {
      ...PersonDetails
    }
  }

  ${PERSON_ALL_DERTAILS_FRAGMENT}
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
