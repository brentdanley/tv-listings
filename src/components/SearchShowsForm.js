import React from 'react'
import { useHistory } from 'react-router-dom'

const SearchShowsForm = () => {

    let history = useHistory()

    const SubmitForm = (data) => {
        history.push(`/search/shows/?q=${data}`)
    }

    return (
      <div>
        <input id="searchTerm" placeholder="Search term"></input>
        <button onClick={() => SubmitForm(document.getElementById('searchTerm').value)}>Get shows</button>
    </div>
    )
}

export default SearchShowsForm