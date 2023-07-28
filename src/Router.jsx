import {BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./components/Menu"
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import Galeria from "./Pages/Galeria"
import Contato from './Pages/Contato'
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