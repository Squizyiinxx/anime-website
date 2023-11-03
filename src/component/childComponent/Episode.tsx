import cekUrl from "./CekUrl";
const Episode = ({ episodes, title,mal_id }: { episodes: number; title: string, mal_id:number }) => {
  const nameAnime = title.replace(/[^a-zA-Z0-9 -]/g, '').replace(/\s+/g, '-').toLocaleLowerCase();

  const loopEpisode = (episodes: number) => {
    const episode = [];
    while (episodes + 1 > 1) {
      const formatEps = episodes.toString().padStart(2, "0");
      
      episode.push(
        <div onClick={() =>cekUrl(nameAnime,mal_id)} key={episodes} className="text-slate-800 cursor-pointer bg-yellow-300 rounded-full text-xs md:text-base shadow-2xl flex items-center justify-center font-bold p-2">
          Episode : {formatEps}
        </div>
      );
      episodes--;
    }
    return episode;
  };
  return (
    <div className="grid py-20 px-10 relative grid-cols-2 md:grid-cols-4 bg-slate-800 w-full gap-4">
      {episodes > 12 && loopEpisode(episodes)}
      {episodes === null && (
        <div onClick={() => cekUrl(nameAnime, mal_id)} key={episodes} className="text-slate-800 cursor-pointer bg-yellow-300 rounded-full shadow-2xl flex items-center justify-center font-bold p-2">
          Details
        </div>
      )}
    </div>
  );
};

export default Episode;
