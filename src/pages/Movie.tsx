import { ListAnime, Slider } from "../component"
import {useState,useEffect} from 'react'
import { getMovie, getMovieSeason } from "../fetch/FetchMovie"

const Movie = () => {
    const [movie, setMovie] = useState([])
    const [seasonMovie, setSeasonMovie] = useState([])

    useEffect(() => {
        getMovie().then(res => setMovie(res.data)).catch(err => console.log(err))
        getMovieSeason().then(res => setSeasonMovie(res.data)).catch(err => console.log(err))
    },[])
    console.log(seasonMovie)
  return (
    <div className="bg-slate-800 py-20">
        <Slider mangaslider={movie} type="movie" />
        <ListAnime titleList="Movie" dataAnime={seasonMovie}/>
    </div>
  )
}

export default Movie