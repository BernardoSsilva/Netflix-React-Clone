import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let generos = [];
    for (let i in item.genres){
        generos.push(item.genres[i].name)
    }

    return (
        <section className='Featured' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featuredVertical'>
                <div className='featuredHorizontal'>
                    <div className='featuredName'>{item.original_name}</div>
                    <div className='featuredInfo'>
                        <div className='featuredPoints'>nota: {item.vote_average} </div>
                        <div className='year'> {firstDate.getFullYear()} </div>
                        <div className='seasons'>{item.number_of_seasons}  temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='description'>{item.overview}</div>
                    <div className='buttons'>
                        <a href={`/watch/${item.id}`} className='assistir'>► Assistir</a>
                        <a href={`/list/add/${item.id}`} className='minhalist'>+ Minha Lista</a>
                    </div>
                    <div className='genres' ><strong>Gêneros:</strong> {generos.join(', ')}</div>
                </div>
            </div>
        
        </section>
    )
}