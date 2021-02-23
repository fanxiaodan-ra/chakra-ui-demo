import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
// theme.config.initialColorMode = 'dark'
// theme.config.useSystemColorMode = true
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);