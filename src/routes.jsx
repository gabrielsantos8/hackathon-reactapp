import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';


const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route 
                    path='/'
                    element={<Home />}
                />
                <Route 
                    path='/cadastro'
                    element={<Cadastro />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;