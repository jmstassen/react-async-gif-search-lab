import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    gifs: []
  }

  handleQuery = (query) => {
    fetch("https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=D7ZSCrMnctQDHKCQKdiufevnqSo9Ngyl&rating=g")
    .then(resp => resp.json())
    .then(data => {
      const firstThree = data.data.slice(0, 3).map(gif => gif.images.original.url)
      this.setState({
        gifs: firstThree
      })
    })  
  }

  render() {
    return(
      <div>
        <GifSearch handleSearch={this.handleQuery}/>
        <GifList gifArr={this.state.gifs}/>
      </div>
    )
  }

}