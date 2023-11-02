import { useParams } from "react-router-dom";
import { Episode, SliderCoverflow, SlinderRecomend, Star } from "../component";
import { FetchRecomend } from "../fetch/FetchDataAnime";
import { useState, useEffect } from "react";
import { getDetailsAnime } from "../fetch/fetchDetail";

interface InterDetails {
  synopsis: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  trailer: {
    embed_url: string;
  };
  mal_id: number;
  genres: [{ name: string }];
  episodes: number;
  status: string;
  title: string;
  score: number;
}

interface genres {
  name: string;
}

function getVideoId(url: string) {
  let match;
  if (url !== null) {
    // eslint-disable-next-line no-useless-escape
    match = url.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\?v=|watch\?vi?=|watch\?feature=player_embedded&v=))([^&?\/ ]{11})/i);
  }

  if (match) {
    return match[1];
  }
  return null;
}

const DetailsAnime = () => {
  const { id } = useParams();

  const [animeRecomend, setAnimeRecomend] = useState([]);
  const [details, setDetails] = useState<InterDetails>({
    synopsis: "",
    images: {
      webp: {
        image_url: "",
      },
    },
    mal_id: 0,
    trailer: {
      embed_url: "",
    },
    genres: [{ name: "" }],
    episodes: 0,
    status: "",
    title: "",
    score: 0,
  });

  useEffect(() => {
    FetchRecomend()
      .then((res) => setAnimeRecomend(res.data))
      .catch((err) => console.log(err));
    getDetailsAnime(id)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div
        className="w-full flex flex-col justify-center overflow-hidden px-4 lg:px-20 relative h-screen bg-slate-800
    after:content-[''] after:block after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-slate-800 after:z-10
    "
      >
        {details.trailer.embed_url !== null && (
          <iframe src={`${details.trailer.embed_url}&playlist=${getVideoId(details?.trailer?.embed_url)}&loop=1&controls=0&mute=1&showinfo=0&subitile=0`} className="w-full h-full  md:h-screen absolute left-0 top-0" allowFullScreen></iframe>
        )}
        <div className="z-[20]">
          <h1 className="text-white  lg:text-[62px] font-agbal">{details?.title}</h1>
          <Star score={details?.score} />
          <div className="flex gap-10 p-3 md:p-5 mt-3">
            <h3 className="text-white text-xs md:text-sm">Episodes : {details?.episodes}</h3>
            <h3 className="py-1 px-6 rounded-full bg-yellow-300 text-slate-800 text-[6px] md:text-sm font-bold">{details?.status}</h3>
          </div>
          <h1 className="text-white text-[8px] md:text-sm mb-4 md:mb-10 leading-5 w-full lg:w-[50%] truncate md:whitespace-normal">{details?.synopsis}</h1>
          <div className="flex gap-10">
            {details?.genres?.map((item: genres, i: number) => (
              <p key={i} className="text-yellow-300 text-sm font-bold md:text-xl">
                {item.name + ","}
              </p>
            ))}
          </div>
        </div>

        <SliderCoverflow mal_id={details?.mal_id} titleEps={details?.title} episodes={details?.episodes} poster={details?.images?.webp?.image_url} />
      </div>
      <Episode title={details?.title} mal_id={details.mal_id} episodes={details?.episodes} />

      <div className="bg-slate-800 px-10 pb-36 pt-20">
        <SlinderRecomend title="Recommended" animeRecomend={animeRecomend} />
      </div>
    </>
  );
};

export default DetailsAnime;
