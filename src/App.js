import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import { GlobalProvider } from './context/GlobalState'
import Lyrics from './components/tracks/Lyrics'

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route path='/' component={Index} exact />
              <Route path='/lyrics/track/:id' component={Lyrics} exact />
            </Switch>
          </div>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App
