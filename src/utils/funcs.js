import axios from "axios";
const {REACT_APP_API_URI} = process.env

export const getSongs = async () => {
    try {
        const songs = await axios.get(REACT_APP_API_URI)
        const {data: {data: audios}} = songs
        return audios
    } catch (e) {
        console.log(e)
    }
}


