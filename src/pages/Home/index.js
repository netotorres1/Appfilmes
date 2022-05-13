import {useEffect, useState } from 'react';
import res from '../../services/res';
import { Link} from 'react-router-dom';
import './home.css';

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes(){
            const response = await res.get("movie/now_playing", {
                params:{
                    api_key: "0cac2d596b64554674c2786c5ac18d09",
                    language: "pt-BR",
                    page: 1,
                }
            })
            setFilmes(response.data.results);
            setLoading(false)
        }
        loadFilmes();
    },[]);

    if(loading){
        return(
            <div className='loading'>
                <h1>Só um momento, estamos carregando os filmes para você! :D</h1>
            </div>
        )
    }

    return(
        <div  className='container-home'>
            <h1 className='titulo-pagina'>FILMES EM CARTAZ</h1>
            <div className='lista-filmes-em-cartaz'>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id} className='lista-filmes-em-cartaz-filme'>
                            <h2 className='lista-filmes-em-cartaz-filme-titulo'>{filme.title}</h2>
                            <img className='lista-filmes-em-cartaz-filme-img' src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <span className='lista-filmes-em-cartaz-filme-average'>{filme.vote_average}</span>
                            <Link to={`/filme/${filme.id}`} className='lista-filmes-em-cartaz-filme-btn' >Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;