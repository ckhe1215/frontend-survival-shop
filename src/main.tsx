import 'reflect-metadata';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';
import routes from './routes';

function main() {
  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  const router = createBrowserRouter(routes);

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Reset />
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>,
  );
}

main();
