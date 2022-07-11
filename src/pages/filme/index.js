import {useEffect, useState } from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import './filme.css';

import res from '../../services/res';

function Filme(){

    const {id} = useParams();
    const navigate = useNavigate();
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
                console.log("Filme nao encontrado");
                navigate("/", { replace: true});
                return;
            })
        }
        loadFilme();
    },[navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("appfilmes");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hashFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hashFilme){
            alert("Esse filme ja esta na lista");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("appfilmes", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso.");
    }

    return(
        <div className='container-filme-pag'>
           <h1 className='container-filme-titulo'>{filme.title}</h1> 
           <img className='container-filme-imagem' src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
           <p className='container-filme-sinopse'>{filme.overview}</p>

           <div className='container-filme-row'>
                <span className='container-filme-data-lancamento'>Data de lançamento: {filme.release_date}</span>
                <span className='container-filme-lancamento'>{filme.status}</span>
                <p className='container-filme-linguagem'>Linguagem original: {filme.original_language}</p>
                <div className='area-buttons'>
                    <button className='area-buttons-btn' onClick={salvarFilme}>Salvar</button>
                    <a rel="noreferrer" target='_blank' className='area-buttons-btn' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </div>
           </div>
        </div>
    )
}

export default Filme;