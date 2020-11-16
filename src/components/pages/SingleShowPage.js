import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../layouts/PageLayout'
import EpisodeList from '../EpisodeList'

import styles from './SingleShowPage.module.scss'

const SingleShow = () => {
    const [show, setShow] = useState({image: ''})

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
                {(show.image !== null) ?
                <img src={show.image.medium} alt={`${show.name} poster`} className={styles.poster} />
                :
                ''
                }
                <div dangerouslySetInnerHTML={{ __html: show.summary}} className={styles.summary}></div>
                <EpisodeList showID={show.id} className={styles.episodeList} />
            </div>
        </Layout>
    )
}

export default SingleShow