import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './SearchShowsForm.module.scss'

const SearchShowsForm = () => {

    let history = useHistory()

    const SubmitForm = (data) => {
        history.push(`/search/shows/?q=${data}`)
    }

    return (
      <div className={styles.form}>
        <input id="searchTerm" placeholder="Search term" className={styles.field}></input>
        <button onClick={() => SubmitForm(document.getElementById('searchTerm').value)} className={styles.button}>Find shows</button>
    </div>
    )
}

export default SearchShowsForm