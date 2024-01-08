import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { Notify } from './Notify'
import { EDIT_NUMBER } from './persons/graphql-mutations'

export const PhoneForm = ({ notifyError }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [editNumber, result] = useMutation(EDIT_NUMBER)

  useEffect(() => {
    if (result.data && result.data.editNumber === null) {
      console.log('Person not found')
      notifyError('Person not found')
    }
  }, [result.data])

  const handleSubmit = e => {
    e.preventDefault()

    editNumber({
      variables: {
        name,
        phone,
      },
    })

    setPhone('')
  }

  return (
    <>
      <Notify errorMessage={result.error?.graphQLErrors[0].message} />
      <div>
        <h2>Edit a phone number for a single Person</h2>
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

          <button type='submit'>update</button>
        </form>
      </div>
    </>
  )
}
