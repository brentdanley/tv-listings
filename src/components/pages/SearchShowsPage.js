import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Helmet from 'react-helmet'

import Layout from '../layouts/PageLayout'
import SearchForm from '../SearchShowsForm'
import SingleShowItem from '../SingleShowItem'
import SingleShowItemNoImage from '../SingleShowItemNoImage'

import styles from './SearchShows.module.scss'

const SearchShows = () => {
  const [shows, setShows] = useState([])
  const [searchTerm, setSearchTerm] = useState('job')

  const fetchShows = async () => {
    const apiCall = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const response = await apiCall.json()
    setShows(response)
  }

  useEffect(() => { fetchShows() }, [searchTerm])

  return (
    <Layout>
      <Helmet>
          <title>Search for {searchTerm} - Brent Danley Codes</title>
      </Helmet>
      <SearchForm updateSearch={setSearchTerm} />
      <div className={styles.showListings}>
      {
        shows.map(show => {
          return (
            (show.show.image === null) ?
            <SingleShowItemNoImage title={show.show.name} description={show.show.summary} showId={show.show.id} key={show.show.id} />
            :
            <SingleShowItem image={show.show.image.medium} title={show.show.name} description={show.show.summary} showId={show.show.id} key={show.show.id} />
          )
        })
      }
      </div>
    </Layout>
  )
}

export default SearchShows;