import axios from "axios"

const getMovie = async () =>{

    const option = {
        params :{
            limit:20,
            filter: "bypopularity",
            type : "movie"
        }
    }
    try{
        const response = await axios.get("https://api.jikan.moe/v4/top/anime", option)
        return response.data

    }catch(err){
        console.error(err)
    }
}

const getMovieSeason = async () =>{
   const option = {
       params : {
        filter : "movie",
        limit : 20,
       }
   }

   try{
    const response = await axios.get("https://api.jikan.moe/v4/seasons/now", option)
    return response.data
   }catch(err){
    console.log(err)
   }
}

export {getMovie,getMovieSeason}