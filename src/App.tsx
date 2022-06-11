import './App.css'
import Header from './components/common/header'
import Technologies from './components/technologies';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/tech' component={Technologies}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
