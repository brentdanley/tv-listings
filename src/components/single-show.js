import React from 'react'
import { Link } from 'react-router-dom'
import styles from './single-show.module.css'

const SingleShow = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.image} alt='' />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />
      <button className={styles.button}><Link to={`/show/${props.showId}`}>Show Episodes</Link></button>
    </div>
  )
}

export default SingleShow