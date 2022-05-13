import './styleHeader.css';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <Link className='header-btn-home' to={'/'}><h1>APP FILMES</h1></Link>
            <nav>
                <Link className='header-btn-list' to={'/melhores-avaliados'}>Melhores Avaliados</Link>
                <Link className='header-btn-list' to={'/proximos-lancamentos'}>Proximo Lançamentos</Link>
            </nav>
        </header>
    )
}

export default Header;