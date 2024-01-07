import { useQuery } from '@apollo/client'
import { GET_PERSONS } from './graphql-queries'

export const usePersons = () => {
  const result = useQuery(GET_PERSONS)
  return result
}
