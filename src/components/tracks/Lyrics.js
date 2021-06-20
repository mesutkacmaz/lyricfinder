import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../layout/Spinner'
import axios from 'axios'

const Lyrics = ({ match }) => {
  const [track, setTrack] = useState({})
  const [lyrics, setLyrics] = useState({})

  useEffect(() => {
    const getLyrics = async () => {
      const res = await fetchLyrics()
      setLyrics(res.data.message.body.lyrics)
    }
  
    const getTrack = async () => {
      const res = await fetchTrack()
      setTrack(res.data.message.body.track)
    }

    getLyrics()
    getTrack()
    // eslint-disable-next-line
  }, [])

  const fetchLyrics = async () => {
    try {
      const res = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`) 
      return res
    } catch (err) {
      console.error(err)
    }
  }

  const fetchTrack = async () => {
    try {
      const res = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`) 
      return res
    } catch (err) {
      console.error(err)
    }
  }

  if (Object.keys(track).length === 0 || Object.keys(lyrics).length === 0) {
    return <Spinner />
  } else {
    return (
      <>
        <Link to='/' className='btn btn-dark btn-sm mb-4'>Go Back</Link>
        <div className='card'>
          <h5 className='card-header'>
            {track.track_name} by <span className='text-secondary'>{track.artist_name}</span>
          </h5>
          <div className='card-body'>
            <p className='card-text'>{lyrics.lyrics_body}</p>
          </div>
        </div>

        <ul className='list-group mt-3'>
          <li className='list-group-item'>
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className='list-group-item'>
            <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
          </li>
        </ul>
      </>
    )
  } 
}

export default Lyrics
