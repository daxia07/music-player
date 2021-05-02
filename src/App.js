import React from 'react';
import ReactAplayer from 'react-aplayer';
const {REACT_APP_SONGS} = process.env

// const songs = REACT_APP_SONGS.split(' ');

const App = () => {
    console.log(REACT_APP_SONGS)
    const theme= '#F57F17'
    const lrcType= 3
    const songs = REACT_APP_SONGS.split(' ')
    const audio = [
        {
            name: '01. willow',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '02. champagne problems',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '03. gold rush',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '04. tis the damn season',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '05. tolerate it',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '06. no body, no crime (feat. HAIM)',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '07. happiness',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },{
            name: '08. dorothea',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '09. coney island (feat. The National)',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '10. ivy',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '11. cowboy like me',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '12. long story short',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '13. marjorie',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },{
            name: '14. closure',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        },
        {
            name: '15. evermore (feat. Bon Iver)',
            artist: 'Taylor Swift',
            cover: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            // lrc: 'https://docs.google.com/uc?export=download&id=1oESVNlsmhhoVDqjP4JcmM7zXbEVprHDw',
            theme: '#ebd0c2'
        }
    ]
    for (let i=0; i<audio.length; i++) {
        audio[i] = {
            ...audio[i],
            url: songs[i]
        }
    }
    return (
        <div>
            <ReactAplayer
                lycType={3}
                loop={'all'}
                order={'random'}
                preload={'auto'}
                volume={0.7}
                mutex
                audio={audio}
                lrcType={lrcType}
                theme={theme}
            />
        </div>
    );
}

export default App