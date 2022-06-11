import "./App.css"
import Header from "./components/common/header"
import Technologies from "./components/technologies"
import Work from "./components/work"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/tech" component={Technologies} />
          <Route exact path="/work" component={Work} />
        </Switch>
      </Router>
    </>
  )
}

export default App
