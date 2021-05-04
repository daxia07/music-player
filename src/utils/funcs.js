import { graphConfig } from "./authConfig";
import axios from "axios";

export const getSongs = async (accessToken) => {
    const bearer = `Bearer ${accessToken}`
    const headers = { 
        'Content-Type': 'application/json', 'Authorization': bearer
     }
     const data = {}
     try {
        let res = await axios.get(graphConfig.graphMeEndpoint, { headers })
        const { data: { value } } = res
        // singers -> albums -> songs & cover
        for (let i=0; i < value.length; i++) {
            // fetch singers
            const {name: singer, id: singerId} = value[i]
            // fetch albums
            console.log(singer)
            const albumsReturn = await axios.get(graphConfig.graphMeItemsEndpoint + `${singerId}/children`, { headers })
            console.log(albumsReturn)
            const { data: { value: albums } } = albumsReturn
            //fetch songs
            for (let i=0; i < albums.length; i++) {
                const {name: album, id: albumId} = albums[i]
                console.log(album)
                const songsReturn = await axios.get(graphConfig.graphMeItemsEndpoint + `${albumId}/children`, { headers })
                // create link and identify cover
                // TODO: query cover
                const { data: { value: songs} } = songsReturn
                for (let i=0; i< songs.length; i++) {
                    const {name: song, id: songId} = songs[i]
                    console.log(song)
                    const linkReturn = await axios.post(graphConfig.graphMeItemsEndpoint + `${songId}/createLink`, {
                        "type": "embed",
                        "scope": "anonymous"
                    }, {headers})
                    let { data: { link: {webUrl} }} = linkReturn
                    console.log(webUrl)
                    webUrl = webUrl.replace('/embed?', '/download?')
                    const entry = {
                        singer,
                        album,
                        song,
                        webUrl
                    }
                    console.log(entry)
                }
                console.log(songs)
            }
        }
        console.log(res)
        // dispatch data
     } catch (e) {
         console.log(e)
     }
     return data
}

