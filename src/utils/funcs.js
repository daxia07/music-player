import axios from "axios";
const {REACT_APP_API_URI} = process.env

export const getCachedSongs = async () => {
    try {
        const songs = await axios.get(REACT_APP_API_URI, {params: {cached: true}})
        const {data: {data: audios}} = songs
        return audios
    } catch (e) {
        console.log(e)
    }
}


