import axios from "axios";

const getDetailsAnime = async (id : string | undefined) => {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export {getDetailsAnime}