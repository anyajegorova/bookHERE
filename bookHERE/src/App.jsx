import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css'

import LandingPage from './views/LandingPage';
import Layout from './Layout';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

axios.defaults.baseURL='http://localhost:4000'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
