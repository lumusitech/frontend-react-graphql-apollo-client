import { useApolloClient } from '@apollo/client'
import { useState } from 'react'
import './App.css'
import { LoginForm } from './LoginForm'
import { Notify } from './Notify'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { PhoneForm } from './PhonePerson'
import { usePersons } from './persons/custom-hooks'

function App() {
  const { loading, error, data } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('phonenumbers-user-token'))

  const client = useApolloClient()

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const logout = () => {
    setToken(null)
    localStorage.clear()
    client.clearStore()
  }

  return (
    <>
      <Notify errorMessage={errorMessage} />

      <h1>Phonebook</h1>

      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <LoginForm setToken={setToken} notifyError={notifyError} />
      )}

      <h2>Friend List</h2>

      <h2>Persons</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {data && <Persons persons={data.allPersons} />}

      <br />
      <hr />

      <PersonForm notifyError={notifyError} />

      <br />
      <hr />

      <PhoneForm notifyError={notifyError} />

      <br />
      <hr />
    </>
  )
}

export default App
