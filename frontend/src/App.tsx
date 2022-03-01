import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, HttpLink } from '@apollo/client';
import Rates from './components/templates/Rates'
import Tenants from './components/templates/Tenants';



function App() {

  const publicApi = "https://nv2gtrwf4fekjee4hvtkbmhpni.appsync-api.us-east-1.amazonaws.com/graphql";


  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:publicApi,
      headers:{
        "X-Api-Key":"da2-o3utctfvdrfpvoszrhhshhrf7i"
      }
    })
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Tenants />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
