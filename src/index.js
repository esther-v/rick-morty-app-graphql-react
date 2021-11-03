import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import App from './App'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    query GetAllCharacters{
      characters{
  	    results{
          id
          name
          image
          status
          species
          location {
            name
          }
  	    }
	    }
    }
  `
}).then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

