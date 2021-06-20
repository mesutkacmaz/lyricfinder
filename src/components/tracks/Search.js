import { useState, useContext} from 'react'
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalState'

const Search = () => {
  const [trackTitle, setTrackTitle] = useState('')

  const { dispatch } = useContext(GlobalContext)

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
      dispatch({
        type: 'SEARCH_TRACKS',
        payload: res.data.message.body.track_list
      })

      setTrackTitle('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
      <div className='card card-body mb-4 p-4'>
        <h1 className='display-4 text-center'>
          <i className='fas fa-music'></i> Search For A Song
        </h1>
        <p className='lead text-center'>Get The Lyrics For Any Song</p>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type='text' className='form-control form-control-lg mb-1' placeholder='Song Title...' value={trackTitle} onChange={e => setTrackTitle(e.target.value)} />
          </div>
          <button className='btn btn-primary btn-lg mb-5' type='submit' style={{ width: '100%' }}>Get Track Lyrics</button>
        </form>
      </div>
  )
}

export default Search
