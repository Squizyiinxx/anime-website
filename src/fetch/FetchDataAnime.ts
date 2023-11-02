import axios from "axios";


const FetchData = async () => {
  const option = {
    params:{
      limit:14,
      page:1
    }
  }

 try {
   const response = await axios.get("https://api.jikan.moe/v4/seasons/now", option);
   return response.data;
 } catch (error) {
   console.error(error);
 }
}

const FetchGenre = async () =>{
  const option = {
    params : {
      filter : "genres"
    }
  }
  try{
    const response = await axios.get("https://api.jikan.moe/v4/genres/anime",option);
    return response.data
  }catch(error){
    console.error(error);
  }
}
const FetchRecomend = async () =>{

  try{
    const response = await axios.get("https://api.jikan.moe/v4/watch/episodes/popular");
    return response.data
  }catch(error){
    console.error(error);
  }
}

const FetchSearch = async(q : string) =>{
  const option = {
    params: {
      q: q,
      order_by: "popularity",
      
    },
  };
    try{
        const response = await axios.get("https://api.jikan.moe/v4/anime", option);
        return response.data
    }catch(err){
      console.error(err)
    }
} 
const FetchSearchGenre = async(type:string, page:number) =>{
  const option = {
    params: {
      limit:24,
      page:page,
      genres : type,
      order_by: "popularity",
      
    },
  };
    try{
        const response = await axios.get("https://api.jikan.moe/v4/anime", option);
        return response.data
    }catch(err){
      console.error(err)
    }
} 


export {FetchData, FetchGenre, FetchRecomend, FetchSearch,FetchSearchGenre}