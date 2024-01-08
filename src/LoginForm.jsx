import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { LOGIN } from './login/graphql-mutations'
import { useEffect } from 'react'

export const LoginForm = ({ setToken, notifyError }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login, result] = useMutation(LOGIN, {
    onError: error => notifyError(error.graphQLErrors[0].message),
  })

  useEffect(() => {
    if (result.data) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('phonenumbers-user-token', token)
    }
  }, [result.data])

  const handleSubmit = e => {
    e.preventDefault()

    login({
      variables: {
        username,
        password,
      },
    })

    setUsername('')
    setPassword('')
  }

  return (
    <>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <br />
          <br />

          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <br />
          <br />

          <button type='submit'>login</button>
        </form>
      </div>
    </>
  )
}
