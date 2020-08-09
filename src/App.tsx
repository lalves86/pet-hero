import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './Routes';
import AppProvider from './hooks';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
