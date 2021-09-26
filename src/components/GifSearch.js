import React from 'react'

export default class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleSearch(this.state.query)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a term:</label>
          <input onChange={this.handleChange} type="text" name="query" value={this.state.query}></input>
          <input type="submit" value="search"></input> 
        </form>

      </div>
    )
  }

}