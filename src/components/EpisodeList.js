import React, { useState, useEffect } from 'react'

import EpisodeListItem from './EpisodeListItem'
import styles from './EpisodeList.module.scss'

const EpisodeList = (props) => {
    const [episodes, setEpisodes] = useState([])

    const fetchEpisodes = async () => {

        const apiCall = await fetch(`http://api.tvmaze.com/shows/${props.showID}/episodes`)
        const response = await apiCall.json()
        setEpisodes(response)
    }

    useEffect(() => { fetchEpisodes() }, [props.showID])

    return (
        <div className={props.className}>
            {episodes.map(episode => {
                return (
                    <EpisodeListItem {...episode} />
                )
            })}
        </div>
    )
}

export default EpisodeList