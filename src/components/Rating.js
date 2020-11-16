import React from 'react'

import styles from './Rating.module.scss'

const Rating = (props) => {

    const ratingWidth = {
        width: `${props.rating}%`
    }

    return (
        <div class={styles.rating}>
            <div class={styles.ratingUpper} style={ratingWidth}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
            <div class={styles.ratingLower}>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>
        </div>
    )
}

export default Rating