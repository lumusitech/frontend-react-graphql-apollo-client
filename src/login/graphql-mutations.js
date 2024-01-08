import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation ($username: String!) {
    createUser(username: $username) {
      username
      id
    }
  }
`
export const LOGIN = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      value
    }
  }
`
