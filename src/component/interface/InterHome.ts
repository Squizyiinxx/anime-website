export interface InterHeroSection {
  id:number;
  title: string;
  img: string;
  sinopsis: string;
}

export interface interGenre {
  mal_id: number;
  name: string;
  url: string;
}

export interface InterAnime {
  type: string
  mal_id : number;
  title: string;
  image: string;
  score?: string;
}

export interface Anime {
  mal_id: number;
  title: string;
  score: string;
  duration?: string
  images: {
    webp: {
      image_url: string;
    };
  };
}
export interface InterRecomend {
  entry: {
    mal_id: number;
    title: string;
    images: {
      webp: {
        image_url: string;
      };
    };
  };
  score: string;
}

export interface BoxSearchProps {
  result: InterResult[];
  cekVal: boolean;
}
export interface InterResult {
  mal_id: number;
  title: string;
  score: string;
  genres: [];
  images: {
    webp: {
      image_url: string;
    };
  };
  name: string;
  episodes: number;
}