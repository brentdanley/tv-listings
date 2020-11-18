import React, { useState, useEffect } from 'react'

import EpisodeListItem from './EpisodeListItem'
import styles from './EpisodeList.module.scss'

const EpisodeList = (props) => {
    const [episodes, setEpisodes] = useState([])

    const fetchEpisodes = async () => {

        const apiCall = await fetch(`https://api.tvmaze.com/seasons/${props.season}/episodes`)
        const response = await apiCall.json()
        setEpisodes(response)
    }

    useEffect(() => { fetchEpisodes() }, [props.season])

    return (
        <div className={`${props.className} ${styles.wrapper}`}>
            {episodes.map(episode => {
                return (
                    <EpisodeListItem {...episode} key={episode.id} />
                )
            })}
        </div>
    )
}

export default EpisodeList