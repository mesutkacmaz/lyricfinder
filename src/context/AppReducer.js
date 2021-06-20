// eslint-disable-next-line
export default (state, action) => {
  switch(action.type) {
    case 'GET_TOP_10_TRACKS':
      return {
        ...state,
        trackList: action.payload
      }
    case 'SEARCH_TRACKS':
      return {
        ...state,
        trackList: action.payload,
        heading: 'Search Results'
      }
    default:
      return state
  }
}