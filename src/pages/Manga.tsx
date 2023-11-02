import { useEffect, useState } from "react";
import { getManga, searchManga } from "../fetch/FetchManga";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Slider, Table } from "../component";

const Manga = () => {
  const [mangaslider, setMangaslider] = useState([]);
  const [mangas, setMangas] = useState([]);
  const [query, setQuery] = useState('')

  const handleGetData = () =>{
    getManga("publishing")
      .then((res) => setMangaslider(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    setTimeout(() => {   
      handleGetData()
      getManga("").then((res) => setMangas(res.data)).catch((err) => console.log(err));
    }, 1000);
  }, []);
  
  const handleSearch = () =>{
        searchManga(query).then(res => setMangas(res.data));
  }

  return (
    <div className="w-full py-20 bg-slate-800">
    <Slider mangaslider={mangaslider} type="manga"/>
      <div className="flex gap-5 px-5 md:px-0 w-[100%] md:w-[90%] xl:w-[80%] mt-32 justify-end mx-auto">
        <button type="submit" onClick={() => handleSearch()} 
        className="p-3 px-6 rounded-lg  bg-yellow-300 text-slate-800 flex items-center justify-center"
        ><FontAwesomeIcon icon={faSearch} /></button>
        <input type="text" id="searchManga" onChange={(e) => setQuery(e.target.value) } placeholder="Search Manga..." className="w-[50%] md:w-[50%] xl:w-[30%] border border-slate-300 rounded-md p-2 focus:outline-none" /></div>
            <Table mangas={mangas} />
    </div>
  );
};

export default Manga;
