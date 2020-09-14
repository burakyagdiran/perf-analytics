import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ROUTES from './routes';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        {ROUTES.map((route) => {
          return <Route exact key={route.path} {...route} />;
        })}
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
