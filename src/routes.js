import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/filme';
import Header from './components/Header';
import ProximosLancamentos from './pages/ProximosLancamentos';
import MelhoresAvaliados from './pages/Melhores_avaliados';
import Populares from './pages/populares';
import Favoritos from './pages/favoritos';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/melhores-avaliados' element={<MelhoresAvaliados/>}/>
                <Route path='/proximos-lancamentos' element={<ProximosLancamentos/>}/>
                <Route path='/populares' element={<Populares/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;