import React, {useEffect} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import {useSelector, useDispatch} from "react-redux";
import {fetchSongs} from "../actions";

const MusicPlayer = () => {
    const content = useSelector(state => state)
    const {songs, fetchSongsInProcess, accessToken } = content
    const dispatch = useDispatch()
    useEffect(() => {
        if (!songs.length && !fetchSongsInProcess && !!accessToken) {
            // fetch songs and mark as in process
            // TODO: fetch lyrics
            dispatch(fetchSongs(accessToken))
        }
    })

    return (
        <ReactJkMusicPlayer
            quietUpdate
            clearPriorAudioLists
            audioLists={songs}
        />
    );
}

export default MusicPlayer