import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SingleShowItemNoImage.module.scss'

const SingleShowItemNoImage = (props) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/show/${props.showId}`}><h3 className={styles.title}>{props.title}</h3></Link>
    </div>
  )
}

export default SingleShowItemNoImage