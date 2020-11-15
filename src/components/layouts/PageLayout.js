import React from 'react'
import Header from './Header'
import SearchShowsForm from '../SearchShowsForm'
import Footer from './Footer'

import styles from './PageLayout.module.scss'

const PageLayout = (props) => {
    return (
        <div>
            <Header />
            <div className={styles.contentWrapper}>
                <SearchShowsForm />
                <h1>{props.heading}</h1>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout