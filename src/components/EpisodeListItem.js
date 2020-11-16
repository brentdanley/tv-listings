import React from 'react'

const EpisodeListItem = (props) => {
    return (
        <div key={props.id}>
            <p>Name: {props.name}</p>
            {(props.image !== null) ? <img src={props.image.medium} alt={`${props.name} poster`} /> : <p>No image.</p>}
            <p>Season: {props.season}</p>
        </div>
    )
}

export default EpisodeListItem