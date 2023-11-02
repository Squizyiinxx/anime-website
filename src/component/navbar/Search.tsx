import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import BoxSearch from "./BoxSearch";
import { FetchSearch } from "../../fetch/FetchDataAnime";

const Search = () => {
  const [input, setInput] = useState(false);
  const [resultSearch, setResultSearch] = useState([]);
  const [cekValue, setCekValue] = useState(false);

  const handleSearch = (q: string) => {
    if (q.length < 3 || q === "") {
      setCekValue(false);
    } else {
      setCekValue(true);
      FetchSearch(q)
        .then((res) => {
          setResultSearch(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="flex justify-end md:justify-start p-3 lg:p-0 gap-3 items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Anime..."
          id="search"
          onFocus={() => setCekValue(true)}
          onBlur={() => {
            setTimeout(() => {
              setCekValue(false);
            }, 1000);
          }}
          onChange={(e) => handleSearch(e.target.value)}
          className={input ? "p-2 rounded-md lg:rounded-xl mr-2 sm:w-[500px] md:w-[500px] lg:w-[200px] xl:w-[400px] transition-all duration-300 bg-slate-300 focus:bg-slate-100 focus:outline-none" : "transition-all duration-300 w-0"}
        />
        <BoxSearch result={resultSearch} cekVal={cekValue} />
        <FontAwesomeIcon icon={faSearch} onClick={() => setInput(!input)} className="text-white text-xl cursor-pointer hover:text-yellow-300" />
      </div>
   
    </div>
  );
};

export default Search;
