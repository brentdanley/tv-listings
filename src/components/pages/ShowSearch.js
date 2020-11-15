import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import SingleShow from '../single-show'


const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}
  
const App = () => {
  const [shows, setShows] = useState([])

  let history = useHistory()
  let query = useQuery().get('q')

  useEffect(() => {
    
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(result => 
        setShows(result)
      )
  }, [shows])

  const SubmitForm = (data) => {
    history.push(`/search/shows/?q=${data}`)
  }

  return (
    <div>
      <div>
        <input id="searchTerm" placeholder="Search term"></input>
        <button onClick={() => SubmitForm(document.getElementById('searchTerm').value)}>Get shows</button>
      </div>
      <div className='show-listing'>
      {
        shows.map(show => {
          if (show.show.image === null) {
            show.show.image = ''
          }
          return (
            <SingleShow image={show.show.image.medium} title={show.show.name} description={show.show.summary} showId={show.show.id} />
          )
        })
      }
      </div>
    </div>
  )
}

export default App;