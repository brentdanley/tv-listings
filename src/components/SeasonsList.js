import React, { useState, useEffect } from 'react'

import SeasonsListItem from './SeasonsListItem'
import styles from './SeasonsList.module.scss'

const SeasonsList = (props) => {
    const [seasons, setSeasons] = useState([])

    const fetchSeasons = async () => {

        const apiCall = await fetch(`https://api.tvmaze.com/shows/${props.showID}/seasons`)
        const response = await apiCall.json()
        setSeasons(response)
        props.setSeason(response[0].id)
    }

    useEffect(() => { fetchSeasons() }, [props.showID])

    return (
        <div className={`${props.className} ${styles.wrapper}`}>
            <div className={styles.title}>Seasons:</div> 
            {seasons.map(season => {
                return (
                    <SeasonsListItem {...season} season={props.activeSeason} setSeason={props.setSeason} key={season.id} />
                )
            })}
        </div>
    )
}

export default SeasonsList