export interface InterManga {
  title: string;
  mal_id:number;
  images: {
    webp: {
      image_url: string;
    };
  };
  chapters: string;
  score: string;
}
export interface InterTableManga {
  rank: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  title: string;
  score: string;
  genres: [
    {
      name: string;
    }
  ];
  type: string;
  members: string;
  status: string;
}
