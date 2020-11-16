import React from 'react'
import Header from './Header'
import SearchShowsForm from '../SearchShowsForm'
import Footer from './Footer'

import styles from './PageLayout.module.scss'

const PageLayout = (props) => {
    return (
        <div>
            <Header heading={props.heading} />
            <div className={styles.contentWrapper}>
                <SearchShowsForm />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout