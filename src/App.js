import React,{ useEffect, useState} from 'react';
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [MovieList, setMovieList ] = useState([]);
  const [FeaturedData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=> {
    //pegar lista
    const LoadAll = async() =>{
      let list = await tmdb.getHomeList();
      setMovieList(list);

      //pegando filme em destaque
      let originals = list.filter(i=>i.slug === 'originals');
      let randomchose = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomchose];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

      setFeaturedData(chosenInfo);
    }

    LoadAll();

  }, []);

  useEffect(() =>{
      const scrollListner = () => {
        if(window.scrollY > 10){
          setBlackHeader(true);
        } else {
          setBlackHeader(false);
        }

      }
      window.addEventListener('scroll', scrollListner);

      return () => {
        window.removeEventListener('scroll', scrollListner);
      }
  }, []);
  

  return(
    <div className='page'>
      <Header Black={blackHeader}/>

      {FeaturedData &&
        <FeaturedMovie item={FeaturedData}/>
      }
      

      <section className='lists'>
        {MovieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>


      {MovieList.length <= 0 &&
        <div classname='loading'>
          <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='carregando'></img>
      </div>
      }
    </div>
    )
}
