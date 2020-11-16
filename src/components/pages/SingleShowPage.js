import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../layouts/PageLayout'
import EpisodeList from '../EpisodeList'

const SingleShow = () => {
    const [show, setShow] = useState({image: ''})

    let { show_id } = useParams()

    const fetchShow = async () => {

        const apiCall = await fetch(`https://api.tvmaze.com/shows/${show_id}`)
        const response = await apiCall.json()
        setShow(response)
    }

    useEffect(() => { fetchShow() }, [])

    return (
        <Layout heading={show.name}>
            <img src={show.image.medium} alt={`${show.name} poster`} />
            <div dangerouslySetInnerHTML={{ __html: show.summary}}></div>
            <EpisodeList showID={show.id} />
        </Layout>
    )
}

export default SingleShow