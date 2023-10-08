import { Route, Routes } from 'react-router-dom';

import './App.css'

import LandingPage from './views/LandingPage';
import Layout from './Layout';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';




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
