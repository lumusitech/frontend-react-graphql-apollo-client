import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_PERSON } from './persons/graphql-mutations'
import { GET_PERSONS } from './persons/graphql-queries'

export const PersonForm = ({ notifyError }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [createPerson] = useMutation(CREATE_PERSON, {
    onError: error => notifyError(error.graphQLErrors[0].message),
    update: (store, response) => {
      const dataInStore = store.readQuery({ query: GET_PERSONS })
      store.writeQuery({
        query: GET_PERSONS,
        data: {
          ...dataInStore,
          allPersons: [...dataInStore.allPersons, response.data.addPerson],
        },
      })
    },
  })

  const handleSubmit = e => {
    e.preventDefault()

    createPerson({
      variables: {
        name,
        phone,
        street,
        city,
      },
    })

    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <>
      <div>
        <h2>Create a new Person</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <br />
          <br />

          <input
            placeholder='Phone'
            type='text'
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />

          <br />
          <br />

          <input
            placeholder='Street'
            type='text'
            value={street}
            onChange={e => setStreet(e.target.value)}
          />

          <br />
          <br />

          <input
            placeholder='City'
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
          />

          <br />
          <br />

          <button type='submit'>add</button>
        </form>
      </div>
    </>
  )
}
