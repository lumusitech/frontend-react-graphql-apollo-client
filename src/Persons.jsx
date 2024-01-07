import { useLazyQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { FIND_PERSON } from './persons/graphql-queries'

export const Persons = ({ persons }) => {
  const [getPerson, result] = useLazyQuery(FIND_PERSON)

  const [person, setPerson] = useState(null)

  if (persons === null) return null

  const showPerson = async name => {
    await getPerson({ variables: { nameToSearch: name } })
  }

  useEffect(() => {
    if (result.data) setPerson(result.data.findPerson)
  }, [result])

  if (person) {
    return (
      <div>
        <h2>{person.name}</h2>
        <div>Phone number: {person.phone}</div>
        <div>
          Address: {person.address.street} {person.address.city}
        </div>
        <button onClick={() => setPerson(null)}>close</button>
      </div>
    )
  }

  return (
    <>
      {persons.map(p => (
        <p key={p.id} onClick={() => showPerson(p.name)}>
          {p.name} - {p.address.city} - {p.id}
        </p>
      ))}
    </>
  )
}
