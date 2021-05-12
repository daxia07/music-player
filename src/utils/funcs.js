import { graphConfig } from "../utils/authConfig";
import axios from "axios";

export const getSongs = async (accessToken) => {
    const bearer = `Bearer ${accessToken}`
    const headers = { 
        'Content-Type': 'application/json', 'Authorization': bearer
     }
     // TODO: send token and request song list with API
     const data = {}
     try {
        let res = await axios.get(graphConfig.graphMeEndpoint, { headers })
        const { data: { value } } = res
        // singers -> abums -> songs & cover
        for (let i=0; i < value.length; i++) {
            // fetch singers
            const { name: singer, id } = value[i]
            // fetch albums
            let ablumsRet = await axios.get(graphConfig.graphMeItemsEndpoint + id + `/children`, { headers })
            console.log(value[i])
            
            //fetch songs
        }
        console.log(res)
        // dispatch data
     } catch (e) {
         console.log(e)
     }
     return data
}

