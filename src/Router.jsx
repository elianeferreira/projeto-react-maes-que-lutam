import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu"
import Home from './pages/Home'
import Sobre from "./pages/Sobre"
import Galeria from "./pages/Galeria"
import Contato from './pages/Contato'
import Footer from "./components/Footer"


const Router = () => {
    return (
        <BrowserRouter>
          <Menu/>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/contato" element={<Contato/>}/>

            </Routes>
            <Footer content="Desenvolvido por Eliane Ferreira💕" />

                   
        </BrowserRouter>
       
        
    )
}

export default Router