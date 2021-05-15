import axios from "axios";
import {driveAPiConfig} from "./driveApi";
const {driveEndPoint} = driveAPiConfig

const defaultCover = 'https://images.unsplash.com/photo-1514924527133-371124f6f5e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80'

export const getSongs = async (accessToken) => {
    const bearer = `Bearer ${accessToken}`
    const headers = { 
        'Content-Type': 'application/json', 'Authorization': bearer
     }
     const data = []
     try {
        // root folders
        const singersFolderRet = await axios.get(driveEndPoint + '/files',
            {
                headers,
                params: {
                    q: "(mimeType='application/vnd.google-apps.folder' and name='singers')"
            }})
        const { data: { files: singersFolder } } = singersFolderRet
        // singers -> albums -> songs & cover
        for (let i=0; i < singersFolder.length; i++) {
            const {id: singerFolderId} = singersFolder[i]
            const singersRet = await axios.get(driveEndPoint + '/files',
                {
                    headers,
                    params: {
                        q: `'${singerFolderId}' in parents`
                    }
                })
            const { data: {files: singers }} = singersRet
            for (let j=0; j<singers.length; j++) {
                const {id: singerId, name: singerName } = singers[j]
                const albumRet = await axios.get(driveEndPoint + '/files',
                    {
                        headers,
                        params: {
                            q: `'${singerId}' in parents`
                        }
                    })
                // TODO: find cover
                const { data: { files: albums } } = albumRet
                for (let k=0; k<albums.length; k++) {
                    const {id: albumId, name: albumName} = albums[k]
                    const coverRet = await axios.get(driveEndPoint + '/files',
                        {
                            headers,
                            params: {
                                q: `'${albumId}' in parents and mimeType contains 'image'`
                            }
                        })
                    const { data: { files: covers }} = coverRet
                    let coverUrl = defaultCover
                    if (covers.length > 0) {
                        coverUrl = `https://docs.google.com/uc?export=download&id=${covers[0].id}`
                    }
                    //const coverUrl = covers.length===0 ? defaultCover: `https://docs.google.com/uc?export=download&id=${covers[0].id}`
                    const songRet = await axios.get(driveEndPoint + '/files',
                        {
                            headers,
                            params: {
                                q: `'${albumId}' in parents and mimeType contains 'audio'`
                            }
                        })
                    const { data: { files: songs }} = songRet
                    // translate url
                    songs.forEach(song => {
                        const {name, id} = song
                        const webUrl = `https://docs.google.com/uc?export=download&id=${id}`
                        data.push({
                            singer: singerName,
                            album: albumName,
                            name,
                            musicSrc: webUrl,
                            cover: coverUrl
                        })
                    })
                }
            }
        }
        // dispatch data
     } catch (e) {
         console.log(e)
     }
     return data
}

