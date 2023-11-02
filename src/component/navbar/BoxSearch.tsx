import { useNavigate } from "react-router-dom";
import { BoxSearchProps, InterResult } from "../interface/InterHome";

const BoxSearch:React.FC<BoxSearchProps> = ({result, cekVal}) => {
  const navigate = useNavigate()
  return (
    <div className={`${cekVal? "flex" : "hidden"} w-[120%] sm:w-[500px] lg:w-auto overflow-y-scroll flex flex-col top-[50px] gap-2 bg-slate-100 absolute rounded-b-lg`} style={{ maxHeight: "300px" }}>
      {result?.map((item: InterResult) => (
        <div onClick={() => navigate(`/details/${item.mal_id}`)} className="flex cursor-pointer p-5 gap-3 hover:bg-slate-200">
          <img src={item.images.webp.image_url} alt="Poster" className="w-12 lg:w-16" />
          <div className="text">
            <h1 className="text-xs sm:text-sm lg:text-md font-bold">{item.title}</h1>
            <h3 className="text-xs sm:text-sm">{item.score ? item.score :'Unknown'}</h3>
            <h3 className="text-xs sm:text-sm">{item.genres?.map((item : InterResult) => `${item.name}, `)}</h3>
            <h3 className="text-sx sm:text-sm">{item.episodes}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoxSearch