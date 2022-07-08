import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#040303',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <NextUIProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NextUIProvider>
);
