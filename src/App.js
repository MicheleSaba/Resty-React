import React from 'react';
import Header from './components/header';
import Form from './components/form';
import ApiProvider from './components/context';
import superagent from 'superagent';
import './App.css';

function App() {
  const handleRequest = request => {
    console.log('request', request);

    superagent(request.method, request.url)
      .then(res => {
        console.log('response', res);
        // TODO: let context know we have a response
      })
  }

  return (
    <ApiProvider>
      <div className="App">
        <Header />
        <Form handleRequest={handleRequest} />
      </div>
    </ApiProvider>
  );
}

export default App;
