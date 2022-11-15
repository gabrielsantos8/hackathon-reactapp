import React from 'react'
import Rotas from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import './global.css'

function App() {
  return (
    <>
     <Rotas />
     <ToastContainer />
    </>
  );
}

export default App;