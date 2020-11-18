import React from 'react'
import Layout from '../layouts/PageLayout'
import Helmet from 'react-helmet'

import styles from './Home.module.scss'

const Home = () => {
    return (
        <Layout>
            <Helmet>
                <title>Home - Brent Danley Codes</title>
            </Helmet>
            <div className={styles.wrapper}>
                <img src='/images/retro_tv.jpg' alt='retro tv' className={styles.retrotv} />
                <h3>Purpose</h3>
                <p>This is an app I created to demonstrate the use of:</p>

                <ul>
                <li>React</li>
                <li>React Router</li>
                <li>React Hooks</li>
                <li>Local state management with the React Hook API</li>
                <li>Accessing URL parameters</li>
                <li>Responsive CSS Grid</li>
                <li>Modular Sass</li>
                <li>JavaScript Fetch API with async/await</li>
                </ul>

                <h3>Code</h3>

                <p>The code repository for this demo site can be found on GitHub at:<br/>
                <a href="https://github.com/brentdanley/tv-listings">TV Listings on GitHub</a></p>

                <h3>Contact</h3>

                <p>To view other demo projects, visit my online <a href="https://brentdanley.codes/">portfolio</a>.</p>
                <p>If you'd like to hire me to be an integral part of your team, have a look at my <a href="https://brentdanley.codes/resume/">resume</a>, then contact me at <a href="tel:207-423-7145">(207) 423-7145</a> or send an email to <a href="mailto:brentdanley@gmail.com">brentdanley@gmail.com</a>.</p>

                <p>Now go ahead and search for a show!</p>
            </div>
        </Layout>
    )
}

export default Home