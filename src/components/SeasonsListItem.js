import React from 'react'

import styles from './SeasonsListItem.module.scss'

const SeasonsListItem = (props) => {

    return (
        <div className={(props.id === props.season) ? `${styles.button} ${styles.active}` : styles.button} onClick={() => props.setSeason(props.id)}>Season {props.number}</div>
    )
}

export default SeasonsListItem