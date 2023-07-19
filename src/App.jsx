
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import Layout from './components/Layout'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import { useEffect } from 'react'

import Notification from './utils/Notification'
const datax = import.meta.env.VITE_REACT_APP_SERVER_URL

axios.defaults.baseURL = 'http://localhost:3000';

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>

      <Route index element={<IndexPage />} />
      
      </Route>
      
    </Routes>
    <Notification />
    </UserContextProvider> 
      
  )
}

export default App
