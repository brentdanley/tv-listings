import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <a href='https://brentdanley.codes' target='_blank' rel='noreferrer' title='Brent Danley&quot; programming portfolio.'>Brent's Coding Portfolio</a>
            </div>
        </footer>
    )
}

export default Footer