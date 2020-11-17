import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../layouts/PageLayout'
import SeasonsList from '../SeasonsList'
import EpisodeList from '../EpisodeList'
import Rating from '../Rating'

import styles from './SingleShowPage.module.scss'

const SingleShow = () => {
    const [show, setShow] = useState({image: ''})
    const [season, setSeason] = useState('')

    let { show_id } = useParams()

    const fetchShow = async () => {

        const apiCall = await fetch(`https://api.tvmaze.com/shows/${show_id}`)
        const response = await apiCall.json()
        setShow(response)
    }

    useEffect(() => { fetchShow() }, [])

    return (
        <Layout heading={show.name}>
            <div className={styles.wrapper}>
                <div className={styles.showMeta}>
                    {(show.image !== null) ?
                    <img src={show.image.medium} alt={`${show.name} poster`} className={styles.poster} />
                    :
                    ''
                    }
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