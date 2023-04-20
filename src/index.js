import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider} from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <React.StrictMode>
  <NextUIProvider>
    <RouterProvider router = {router} />
    </NextUIProvider>
 </React.StrictMode>
);