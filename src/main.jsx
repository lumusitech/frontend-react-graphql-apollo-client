import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
