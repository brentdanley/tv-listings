import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Layout from '../layouts/PageLayout'
import SingleShow from '../single-show'

const SearchShows = () => {
  const [shows, setShows] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery().get('q')

  useEffect(() => {
    
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(result => 
        setShows(result)
      )
  }, [shows])

  return (
    <Layout heading='This is the search page.'>
      <div className='show-listing'>
        <h1>Search results for: {query}</h1>
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
    </Layout>
  )
}

export default SearchShows;