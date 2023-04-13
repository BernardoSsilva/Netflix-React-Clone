const APIkey = '4090ad1bc09ac211a929c31fef82ea9a' ;
const APIbase = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) =>{
    const req = await fetch(`${APIbase}${endpoint}`)
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return[
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados Para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${APIkey}`)
            },
            {
                slug: 'documentary',
                title: 'Documentario',
                items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${APIkey}`)
            }
        ];
    },

    getMovieInfo: async(movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${APIkey}`)
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${APIkey}`)
                break;
                default:
                    info = null;
                    break;
            }
        }

        return(info)
    }
}