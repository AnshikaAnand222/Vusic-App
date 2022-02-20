import { useEffect, useState } from 'react';
import Player from './components/Player'

function App() {

  const [songs] = useState([
    {
      title: "Lose",
      artist: "KSI",
      img_src: "./images/Lose.jpeg",
      src: "./songs/Lose_song.mp3"
    },
    {
      title: "Cradles",
      artist: "Sub Urban",
      img_src: "./images/cradles.jpeg",
      src: "./songs/Cradles_song.mp3"
    },
    {
      title: "Die for you",
      artist: "Grabbitz",
      img_src: "./images/DieForYou.jpeg",
      src: "./songs/DieForYou_song.mp3"
    },
    {
      title: "I'm ready",
      artist: "Jaden Smith",
      img_src: "./images/Imready.jpeg",
      src: "./songs/ImReady_song.mp3"
    },
    {
      title: "No Time",
      artist: "KSI",
      img_src: "./images/NoTime.jpeg",
      src: "./songs/NoTime_song.mp3"
    },
    {
      title: "Therefore I Am",
      artist: "Billie Eilish",
      img_src: "./images/ThereforeIAm.jpeg",
      src: "./songs/ThereforeIAm_song.mp3"
    }

  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(0)

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    });
  }, [currentSongIndex, songs.length])

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  )
}

export default App;
