import './App.css';
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='block'>
          <Head />
          <Body />
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
