import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

const Header = () => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </div>
                <h1 className={styles.pageTitle}>TV Junkies</h1>
            </div>
        </header>
    )
}

export default Header