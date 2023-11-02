import { ListAnime, LoadingScreen, Slider } from "../component"
import {useState,useEffect} from 'react'
import { getMovie, getMovieSeason } from "../fetch/FetchMovie"

const Movie = () => {
  const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [seasonMovie, setSeasonMovie] = useState([])

    useEffect(() => {
        Promise.all([getMovie(), getMovieSeason()])
          .then(([movieRes, seasonRes]) => {
            setMovie(movieRes.data);
            setSeasonMovie(seasonRes.data);
          })
          .catch((err) => console.log(err));
          setTimeout(() => {
            setIsLoading(false)
          }, 4000);
    },[])
  return (
    <div className="bg-slate-800 py-20">
        {isLoading && <LoadingScreen />}
        <Slider mangaslider={movie} type="movie" />
        <ListAnime titleList="Movie" dataAnime={seasonMovie}/>
    </div>
  )
}

export default Movie