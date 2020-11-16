import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import SearchShows from './components/pages/SearchShowsPage'
import SingleShow from './components/pages/SingleShowPage'
import Home from './components/pages/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/search/shows/' children={<SearchShows />} />
        <Route path='/show/:show_id' children={<SingleShow />} />
        <Route path='/' children={<Home />} />
      </Switch>
    </Router>
  )
}

export default App;
