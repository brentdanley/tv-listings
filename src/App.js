import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import ShowSearch from './components/pages/ShowSearch'
import SingleShow from './components/pages/SingleShow'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
  
    return (
      <div>
        <Router>
            <Route path='/search/shows/' children={<ShowSearch />} />
            <Route path='/show/:show_id' children={<SingleShow />} />
        </Router>
      </div>
    )
  }
}

export default App;
