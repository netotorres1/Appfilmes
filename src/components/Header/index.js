import './styleHeader.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function Header(){

    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    return(
        <header className='header'>
            <Link className='header-btn-home' to={'/'}><h1>APP FILMES</h1></Link>
            <div className={ active ? "icon iconActive" : "icon"} onClick={ToggleMode} >
                <div className='hamburguer hamburguerIcon'></div>
            </div>
            <div  className={active ? 'menu menuOpen' : 'menu menuClose'}>
                <div className='list'>
                    <nav className='nav-list'>
                        <Link className='header-btn-list' to={'/'}>Home</Link>
                        <Link className='header-btn-list' to={'/melhores-avaliados'}>Melhores Avaliados</Link>
                        <Link className='header-btn-list' to={'/proximos-lancamentos'}>Proximo Lançamentos</Link>
                        <Link className='header-btn-list' to={'/populares'}>Populares</Link>
                        <Link className='header-btn-list' to={'/favoritos'}>Favoritos</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;