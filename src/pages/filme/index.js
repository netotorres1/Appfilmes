import {useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import './filme.css';

import res from '../../services/res';

function Filme(){

    const {id} = useParams();
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        async function loadFilme(){
            await res.get(`/movie/${id}`, {
                params:{
                    api_key: "0cac2d596b64554674c2786c5ac18d09",
                    language: "pt-BR",
                    page: 1,
                }
            })
            .then((response) => {
                setFilme(response.data);
                console.log(response.data);
            })
            .catch(() => {
                console.log("Filme nao encontrado")
            })
        }
        loadFilme();
    },[])

    return(
        <div className='container-filme'>
           <h1 className='container-filme-titulo'>{filme.title}</h1> 
           <img className='container-filme-imagem' src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
           <p className='container-filme-sinopse'>{filme.overview}</p>
           <div className='container-filme-row'>
            <span className='container-filme-data-lancamento'>Data de lançamento: {filme.release_date}</span>
            <span className='container-filme-lancamento'>{filme.status}</span>
            <p className='container-filme-linguagem'>Linguagem original: {filme.original_language}</p>
           </div>
        </div>
    )
}

export default Filme;