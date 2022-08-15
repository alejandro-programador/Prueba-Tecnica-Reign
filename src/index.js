/** Imports */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './theme/index';

/** Imports (Redux) */
import { Provider } from 'react-redux';
import store from './redux/store';

/** Imports (React router dom) */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import { Characters } from './hooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={ store }>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path='/' element={ <App /> }>
            <Route index element={ <Characters category='' /> } />
            <Route path='angular' element={ <Characters category='angular' />} />
            <Route path='react' element={ <Characters category='react' />} />
            <Route path='vue' element={ <Characters category='vue' />} />
          </Route>
          <Route path='/*' element={ <Error /> } />
        </Routes>
      </ThemeProvider>
    </Provider>
    </BrowserRouter>
);