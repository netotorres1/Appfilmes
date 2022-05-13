import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/filme';
import Header from './components/Header';
import ProximosLancamentos from './pages/ProximosLancamentos';
import MelhoresAvaliados from './pages/Melhores_avaliados';


function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='/melhores-avaliados' element={<MelhoresAvaliados/>}/>
                <Route path='/proximos-lancamentos' element={<ProximosLancamentos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;