import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';

function Favoritos(){

    const [filme, setFilme] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem("appfilmes");
        setFilme(JSON.parse(minhaLista) || []);

    },[])

    function excluirFilme(id){
        let filtroFilmes = filme.filter((item) => {
            return(item.id !== id)
        })
        setFilme(filtroFilmes);
        localStorage.setItem("appfilmes", JSON.stringify(filtroFilmes));
    }

    return(
        <div className='meus-filmes'>
            {filme.map((filme) => {
                return(
                    <div className='container-filme' key={filme.id}>
                        <h2 className='meus-filmes-title'>{filme.title}</h2>
                        <div className='container-meus-filmes-btn'>
                            <Link className='meus-filmes-btn' to={`/filme/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirFilme(filme.id)} className='meus-filmes-btn'>Excluir</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Favoritos;