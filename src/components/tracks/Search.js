import { useState } from 'react'

const Search = () => {
  const [trackTitle, setTrackTitle] = useState('')

  return (
      <div className='card card-body mb-4 p-4'>
        <h1 className='display-4 text-center'>
          <i className='fas fa-music'></i> Search For A Song
        </h1>
        <p className='lead text-center'>Get The Lyrics For Any Song</p>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control form-control-lg mb-1' placeholder='Song Title...' value={trackTitle} onChange={e => setTrackTitle(e.target.value)} />
          </div>
          <button className='btn btn-primary btn-lg mb-5' type='submit' style={{ width: '100%' }}>Get Track Lyrics</button>
        </form>
      </div>
  )
}

export default Search
