import * as React from 'react'
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react'
import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import theme from './theme'
import SideBar from './components/sidebar/SideBar'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex w='100%' h='100vh' direction='column'>
      <NavBar h='20vh' />
      <Flex direction='row' alignItems='flex-start' w='100%' h='80vh'>
        <SideBar />
        <Flex p={10} w='100%'>
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='/home' element={<HomePage />} />
          </Routes>
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>
)
