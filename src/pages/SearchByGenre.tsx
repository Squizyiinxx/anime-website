import { Genre, ListAnime, LoadingScreen, Slider } from "../component";
import { useState, useEffect } from "react";
import { FetchData, FetchSearchGenre } from "../fetch/FetchDataAnime";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SearchByGenre = () => {
  const [genreSearch, setGenreSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genre = params.get("genre") || "";
  const type = params.get("type") || "";

  useEffect(() => {
    Promise.all([FetchData(), FetchSearchGenre(type, page)])
      .then(([animeRes, genreRes]) => {
        if (animeRes !== 429) {
          console.log(animeRes)
          setDataAnime(animeRes.data);
        }
        if (genreRes !== 429) {
          setGenreSearch(genreRes.data);
        }
      })
      .catch((err) => console.log(err));

        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
  }, [type, page]);

  const handlePage = (y: string) => {
    if (y === "-1") {
      setPage(page + parseInt(y));
    } else {
      setPage(page + parseInt(y));
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="py-24 bg-slate-800">
      {isLoading && <LoadingScreen />}
      <Slider mangaslider={dataAnime} type="" />
      <Genre />
      <ListAnime dataAnime={genreSearch} titleList={genre} />
      <div className="flex w-full justify-center gap-4 items-center px-5">
        <button onClick={() => page > 1 && handlePage("-1")} className="py-2 px-4 rounded-lg bg-slate-100">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <p className="text-white text-2xl">{page}</p>
        <button onClick={() => handlePage("+1")} className="py-2 px-4 rounded-lg bg-slate-100">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default SearchByGenre;
