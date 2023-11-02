import Card from "../childComponent/Card";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { Anime } from "../interface/InterHome";

const ListAnime = ({ titleList, dataAnime }: { titleList: string; dataAnime: never[] }) => {
  return (
    <div className="mb-64">
      <div className="flex items-center flex-col mt-12 justify-center  w-[90%] mx-auto">
        <div className="w-full flex border-b-[1px] justify-center md:justify-start md:items-start items-center">
          <h1 className="md:text-4xl text-lg text-white font-bold pb-3">{titleList}</h1>
        </div>
        <div className="flex gap-3 justify-center md:justify-start md:gap-9 flex-wrap items-center">
          {dataAnime?.map((item: Anime) => (
            <Card key={item.mal_id} type="" mal_id={item.mal_id} title={item.title} image={item.images.webp.image_url} score={item.score === null && item.duration === "Unknown" ? "" : item.score === null ? item.duration : item?.score} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListAnime;
