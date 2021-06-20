import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import Spinner from '../layout/Spinner'
import Track from './Track'

const Tracks = () => {
  const { heading, trackList, getTop10Tracks } = useContext(GlobalContext)
  useEffect(() => {
    getTop10Tracks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {trackList.length === 0 ? (
        <Spinner />
      ) : <>
        <h3 className='text-center mb-4'>{heading}</h3>
        <div className='row'>
          {trackList.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </>}
    </>
  )
}

export default Tracks
