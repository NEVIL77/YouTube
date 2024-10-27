import './App.css';
import Head from './components/Head'
import Body from './components/Body'
import { Provider } from 'react-redux';
import store from './utils/store';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element  : <Body />,
      children : [
        {
          path : "/",
          element : <MainContainer/>
        },
        {
          path : "watch",
          element : <WatchPage/>
        }
      ]
    }
  ])

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className='block'>
          <Head />
          <RouterProvider router={appRouter}/>
        </div>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
