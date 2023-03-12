import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Nav from './Components/Nav.jsx';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Body from './Components/Body.jsx';
import FooterContent from './Components/FooterContent.jsx';

//import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars)

function App() {
  return (
   <> 
    <ChakraProvider>
    <Nav />      
    <Header />
    <Main />
    <Body />
    <FooterContent />
    </ChakraProvider> 
   </> 
  );
}

export default App;
