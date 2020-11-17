import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className={styles.wrapper}>
                <div>Visit <a href='https://brentdanley.codes' target='_blank' rel='noreferrer' title="Brent Danley's programming portfolio.">Brent's Coding Portfolio</a></div>
                <div className={styles.contact}>
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p><strong>Brent Danley</strong><br />
                    <a href="tel:207-423-7145" title="Brent's phone number">(207) 423-7145</a><br />
                    <a href="mailto:brentdanley@gmail.com" title="Brent's email address">brentdanley@gmail.com</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer