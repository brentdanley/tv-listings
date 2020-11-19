import React from 'react'
import Header from './Header'
import Footer from './Footer'

import styles from './PageLayout.module.scss'

const PageLayout = (props) => {
    return (
        <div>
            <Header heading={props.heading} />
            <div className={styles.contentWrapper}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout