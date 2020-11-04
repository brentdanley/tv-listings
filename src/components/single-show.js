import React from 'react'

const SingleShow = (props) => {
  return (
    <div>
      <img src={props.image} alt='' />
      <h3>{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  )
}

export default SingleShow