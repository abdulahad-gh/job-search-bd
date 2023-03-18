import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Main from './layer/Main';
import routes from './router/routes';

function App() {
  return (
 <RouterProvider router={routes}>
  <Main/>
 </RouterProvider>
  );
}

export default App;
