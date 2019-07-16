import React, { useContext } from 'react';
import Header from './components/header';
import Form from './components/form';
import { ApiContext } from './components/context';
import './App.css';

function App() {
  const api = useContext(ApiContext);
  console.log('api context', api);

  return (
    <div className="App">
      <Header />
      <Form handleRequest={api.handleRequest} />
    </div>
  );
}

export default App;
