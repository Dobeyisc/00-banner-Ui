import *as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Theme } from './Resources/Theme/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider Theme= {Theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ChakraProvider>
)
