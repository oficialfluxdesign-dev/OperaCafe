import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Eventos from './pages/Eventos'
import Contato from './pages/Contato'
import ScrollToTop from './components/ScrollToTop'
import Loja from './pages/Loja'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
