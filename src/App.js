import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import SearchShows from './components/pages/SearchShows'
import SingleShow from './components/pages/SingleShow'
import Home from './components/pages/Home'

const App = () => {
  return (
    <Router>
      <Route path='/search/shows/' children={<SearchShows />} />
      <Route path='/show/:show_id' children={<SingleShow />} />
      <Route path='/' children={<Home />} />
    </Router>
  )
}

export default App;
