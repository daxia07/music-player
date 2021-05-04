import React, {useState} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicPlayer = () => {
    const [audioLists, setAudioLists] = useState([
        {
            musicSrc:
                "https://onedrive.live.com/download?resid=FCCA0F13C449D25F%211115&authkey=!AGYk8vclOQPUal4"
        }
    ]);

    return (
        <ReactJkMusicPlayer
            quietUpdate
            clearPriorAudioLists
            audioLists={audioLists}
        />
    );
}

export default MusicPlayer