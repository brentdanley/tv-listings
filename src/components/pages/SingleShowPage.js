import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Helmet from 'react-helmet'

import Layout from '../layouts/PageLayout'
import SeasonsList from '../SeasonsList'
import EpisodeList from '../EpisodeList'
import Rating from '../Rating'

import styles from './SingleShowPage.module.scss'

const SingleShow = () => {
    const [show, setShow] = useState({name: '',image: ''})
    const [season, setSeason] = useState('')

    let { show_id } = useParams()

    const fetchShow = async () => {

        const apiCall = await fetch(`https://api.tvmaze.com/shows/${show_id}`)
        const response = await apiCall.json()
        setShow(response)
    }

    useEffect(() => { fetchShow() }, [])

    return (
        <Layout>
            <Helmet>
                <title>{show.name} - Brent Danley Codes</title>
            </Helmet>
            <div className={styles.wrapper}>
                {(show.image !== null) ?
                <img src={show.image.medium} alt={`${show.name} poster`} className={styles.poster} />
                :
                ''
                }
                <div className={styles.showMeta}>
                    <h2 className={styles.heading}>{show.name}</h2>
                    <Rating rating={(show.rating !== undefined) ? show.rating.average * 10 : 0} className={styles.rating} />
                    <div dangerouslySetInnerHTML={{ __html: show.summary}} className={styles.summary}></div>
                </div>
                <div className={styles.episodeList}>
                    <SeasonsList showID={show.id} activeSeason={season} setSeason={setSeason} />
                    <EpisodeList season={season} />
                </div>
            </div>
        </Layout>
    )
}

export default SingleShow