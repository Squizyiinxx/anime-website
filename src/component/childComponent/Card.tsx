import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InterAnime } from "../interface/InterHome";
import { useNavigate } from "react-router-dom";

const Card = ({ title, image, score, mal_id,type} : InterAnime) => {

  const handleUrl = () => {
    const url = "https://komiku.id/manga/";
    const nameAnime = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-")
      .toLocaleLowerCase()
    if(type === 'manga'){
      window.location.href=`${url}/${nameAnime}`
    }else{
      navigate(`/details/${mal_id}`)
    }
  }

  const navigate = useNavigate()
  return (
    <div
      onClick={() => handleUrl()} className="overflow-hidden cursor-pointer hover:shadow-shodowPrime hover:translate-y-[-5px] transition-all duration-300 justify-end flex flex-col h-[200px] md:h-[300px]
    bg-cover bg-center bg-no-repeat md:w-[190px] w-[120px] rounded-xl relative mt-10
    after:content-[''] after:w-full after:block after:absolute after:bottom-0 
    after:left-0 after:-z-4  after:h-32 after:bg-gradient-to-t 
    after:from-slate-900 after:to-transparent
    "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute top-3 left-0 bg-slate-800 w-18 py-1 px-2 rounded-r-lg flex justify-end items-center gap-3">
        <div className="bg-white p-1 text-center items-center flex flex-col rounded-full">
          <FontAwesomeIcon icon={faStar} className="text-sm text-red border-1 z-20" />
        </div>
        <p className="text-white">{score ? score : ""}</p>
      </div>
      <div className="w-full flex leading-tight md:leading-normal text-center text-sm md:text-lg justify-center items-center text-white z-10 p-5">{title}</div>
    </div>
  );
};

export default Card;
