
import './App.css'

import LandingPage from './views/LandingPage';
import Layout from './Layout';

import { Route, Routes } from 'react-router-dom';
import LoginPage from './views/LoginPage';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
