import React from 'react'
import Layout from '../layouts/PageLayout'

import styles from './NoMatch.module.scss'

const NoMatch = () => {
    return (
        <Layout>
            <h1 className={styles.header}>It appears your show has been canceled.</h1>
            <img src='/images/404tv.png' alt='retro tv' className={styles.tv} />
        </Layout>
    )
}

export default NoMatch