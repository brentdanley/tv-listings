import React from 'react'
import SingleShow from './components/single-show'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      searchTerm: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            shows: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
          });
        }
      )
  }

  onChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
  
    const shows = this.state.shows;
    return (
      <div>
        <header>
          <h1>Brent's Cool Show Listings</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Search term"
              value={this.state.searchTerm}
              onChange={this.onChange}
            ></input>
          <button>Get shows</button>
          </form>
        </header>
        <div className='show-listing'>
        {
          shows.map(show => (
            <SingleShow image={show.show.image.medium} title={show.show.name} description={show.show.summary} />
          ))
        }
        </div>
      </div>
    )
  }
}

export default App;
