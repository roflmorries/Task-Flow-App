import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.jsx'


import { createGlobalStyle } from 'styled-components'

import { Provider, useSelector } from 'react-redux';
import store from './store/store.js'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#1b1b1d')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
    overflow: hidden;
  }
`
function Root() {
    const theme = useSelector((state) => state.theme.theme);
    return (
      <>
        <GlobalStyles theme={theme} />
        <App />
      </>
    );
  }

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
        <Root/>
  </Provider>
)