import ListAnime from "./ListAnime";
import { useState, useEffect } from "react";
import { FetchData, FetchRecomend } from "../../fetch/FetchDataAnime";
import { SlinderRecomend } from "..";

const Index = () => {
  const [dataAnime, setDataAnime] = useState([]);
  const [animeRecomend, setAnimeRecomend] = useState([]);

  const getData = () => {
    FetchData()
      .then((res) => {
        setDataAnime(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getAnimeRecomend = () => {
    FetchRecomend().then((res) => {
      setAnimeRecomend(res.data);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
      getAnimeRecomend();
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex items-center flex-col mt-12 justify-center w-[90%] mx-auto">
        <SlinderRecomend title="Top Anime" animeRecomend={animeRecomend} />
      </div>
      <ListAnime titleList={"New Release"} dataAnime={dataAnime} />
    </>
  );
};

export default Index;
