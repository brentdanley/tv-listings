import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss'

const Header = (props) => {
    return (
        <header>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                </div>
                <h1 className={styles.pageTitle}>{props.heading}</h1>
            </div>
        </header>
    )
}

export default Header