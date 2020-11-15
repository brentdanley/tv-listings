import React from 'react'
import { useParams } from 'react-router-dom'

const SingleShow = () => {
    return (
        <p>This is the single show with id <GetShowId />.</p>
    )
}

export default SingleShow

const GetShowId = () => {
    let params = useParams()

    return (
        <p>{params.show_id}</p>
    )
}