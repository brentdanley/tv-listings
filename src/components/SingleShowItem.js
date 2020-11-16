import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SingleShowItem.module.scss'

const SingleShowItem = (props) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/show/${props.showId}`}><img className={styles.image} src={props.image} alt='' /></Link>
    </div>
  )
}

export default SingleShowItem