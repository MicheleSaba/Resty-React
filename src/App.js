import React from 'react';
import Header from './components/header';
import Form from './components/form';
import ApiProvider from './components/context';
import './App.css';

function App() {
  return (
    <ApiProvider>
      <div className="App">
        <Header />
        <Form />
      </div>
    </ApiProvider>
  );
}

export default App;
