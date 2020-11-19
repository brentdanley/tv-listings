import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                </div>
                <h1 className={styles.pageTitle}>TV Junkies</h1>
                <div className={styles.searchIcon}>
                    <Link to="/search/shows/"><FontAwesomeIcon icon={faSearch} /></Link>
                </div>
            </div>
        </header>
    )
}

export default Header