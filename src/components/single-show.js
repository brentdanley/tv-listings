import React from 'react'
import styles from './single-show.module.css'

const SingleShow = (props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={props.image} alt='' />
      <h3 className={styles.title}>{props.title}</h3>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />
      <button className={styles.button}>Show Episodes</button>
    </div>
  )
}

export default SingleShow