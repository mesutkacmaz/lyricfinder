import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' component={Index} exact />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App
