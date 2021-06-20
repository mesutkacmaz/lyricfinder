import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
  trackList: [],
  heading: 'Top 10 Tracks',
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  async function getTop10Tracks() {
    try {
      const res = await axios.get(`https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=wx&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
      
      dispatch({
        type: 'GET_TOP_10_TRACKS',
        payload: res.data.message.body.track_list
      })

    } catch (err) {
      console.error(err)
    }
  }
  
  return (
    <GlobalContext.Provider value={{ trackList: state.trackList, heading: state.heading, getTop10Tracks, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}