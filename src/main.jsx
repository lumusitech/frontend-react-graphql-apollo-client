import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const getAuth = () => {
  const token = localStorage.getItem('phonenumbers-user-token')
  return token ? `bearer ${token}` : null
}

const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({
    headers: {
      Authorization: getAuth(),
    },
    uri: 'http://localhost:4000/graphql',
  }),
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
