import Swal from "sweetalert2";


const cekUrl = (nameAnime: string, mal_id : number) => {
  Swal.fire({
    title: "Streaming or Details",
    color: "#1e293b",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: "#00DC82",
    denyButtonColor: "#2e51a2",
    confirmButtonText: "AnimeIndo",
    denyButtonText: `MyAnimeList`,
  }).then((result) => {
    if (result.isConfirmed) {
      const animeIndo = `https://www.animeindo.stream/anime/${nameAnime}`;
      window.location.href = animeIndo;
    } else if (result.isDenied) {
      const animeIndo = `https://myanimelist.net/anime/${mal_id}`;
      window.location.href = animeIndo;
    }
  });
};

export default cekUrl