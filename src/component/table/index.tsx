import { InterTableManga } from "../interface/InterManga";

const index = ({mangas} : {mangas: InterTableManga[]}) => {

  const handleUrl = (title:string) =>{
    const url = "https://komiku.id/manga/";
    const nameAnime = title
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/\s+/g, "-")
      .toLocaleLowerCase();
      window.open(`${url}/${nameAnime}`,'_blank')

  }
  return (
    <>
      <table className="w-[100%] md:w-[90%] xl:w-[80%] mt-10 text-white text-center mx-auto">
        <thead className="bg-yellow-300">
          <tr>
            <th className="border text-xs md:text-lg text-slate-800">Rank</th>
            <th className="border text-xs md:text-lg text-slate-800">Title</th>
            <th className="border text-xs md:text-lg text-slate-800">Score</th>
            <th className="border text-xs md:text-lg text-slate-800">Status</th>
          </tr>
        </thead>
        <tbody>
          {mangas.map((item: InterTableManga, i: number) => (
            <tr key={i}>
              <td className="border w-10 md:w-32 whitespace-normal">{item.rank}</td>
              <td className="border cursor-pointer" onClick={() =>handleUrl(item.title)}>
                <div className="flex p-4 w-full gap-4">
                  <img src={item.images.webp.image_url} alt="poster" className="w-10 sm:w-14 md:w-16" />
                  <div className="flex flex-col flex-start">
                    <h1 className="text-sm md:text-base font-bold lg:text-xl text-start md:text-sm truncate w-14 md:whitespace-normal md:w-auto">{item.title}</h1>
                    <h3 className="text-start text-[10px] md:text-sm truncate w-14 md:w-auto md:whitespace-normal">{item.genres.map((item) => `${item.name}, `)}</h3>
                    <h3 className="text-start text-[10px] md:text-sm">Type: {item.type}</h3>
                    <h3 className="text-start text-[10px] md:text-sm">Members: {item.members}</h3>
                  </div>
                </div>
              </td>
              <td className="border md:w-40 sm:w-32 text-[12px] sm:text-base w-14 font-bold">{item.score ? item.score : "Unknown"}</td>
              <td className="border md:w-40 sm:w-32 text-[12px] sm:text-base w-14 ">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default index