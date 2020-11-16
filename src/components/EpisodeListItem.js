import React from 'react'

import styles from './EpisodeListItem.module.scss'

const EpisodeListItem = (props) => {
    return (
        <div className={styles.wrapper} key={props.id}>
            <p>{`S${props.season}:E${props.number} ${props.name}`}</p>
            {(props.image !== null) ? <img src={props.image.medium} alt={`${props.name} poster`} /> : ''}
            <div className={styles.summary} dangerouslySetInnerHTML={{ __html: props.summary}}></div>
        </div>
    )
}

export default EpisodeListItem