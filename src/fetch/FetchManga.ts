import axios  from "axios";

const getManga = async(filter : string ) =>{
   interface InterOption {
  params: {
    page : number
    type: string;
    limit: number;
    filter?: string; 
  };
}
    const option : InterOption = {
      params: {
        page :1,
        type : "manga",
        limit:15,
      },
    };
    if (filter === "publishing") {
      option.params.filter = filter;
    }
    try {
        const response = await axios.get("https://api.jikan.moe/v4/top/manga", option);
        return response.data;
    }catch(err) {
        console.error(err)
    }
}

const searchManga = async(q :string) =>{
    const option = {
      params: {
        q: q,
        order_by: "popularity",
        type : "manga"
      },
    };
    try{
        const response = await axios.get("https://api.jikan.moe/v4/manga",option);
        return response.data
    }catch(err){
        console.error(err)
    }
}

export {getManga,searchManga}