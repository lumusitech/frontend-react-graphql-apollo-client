import { useState } from 'react'
import './App.css'
import { Notify } from './Notify'
import { PersonForm } from './PersonForm'
import { Persons } from './Persons'
import { usePersons } from './persons/custom-hooks'
import { PhoneForm } from './PhonePerson'

function App() {
  // native query to graphql
  // useEffect(() => {
  //   fetch('http://localhost:4000/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query: `
  //     query {
  //       allPersons {
  //         name
  //       }
  //     }
  //     `,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }, [])

  const { loading, error, data } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)

  if (error) return <span style={{ color: 'red' }}>{error.message}</span>

  const notifyError = message => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  return (
    <>
      <Notify errorMessage={errorMessage} />

      <h1>Persons</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error : {error.message}</p>}
      {data && <Persons persons={data.allPersons} />}

      <br />
      <hr />

      <PersonForm notifyError={notifyError} />

      <br />
      <hr />

      <PhoneForm notifyError={notifyError} />
    </>
  )
}

export default App
