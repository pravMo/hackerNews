import React from 'react';
import News from './mapNews/news';
import './App.css';
import AddQuery from './search/addQuery';
 
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      query : '', 
      hits : [], 
      filteredApi : null, 
      results : null, 
      message : ''
    }
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(body => this.setState({ hits: body.hits }))
  }

  onInput = (event) => {
    const query = event.target.value
    const {hits} = this.state
   
    if (query.length > 0) {
        let matches = hits.filter((param) => {
          const regex = new RegExp(`${query.replace(/^[ ]+|[ ]+$/g,'').replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'gi')
          return param.author.match(regex)         
    })

        this.setState({
          query: event.target.value, 
          filteredApi: matches, 
        })

    } else if (query.length === 0) {
        this.setState({
            query: ''
        })
     }
  }

  onSearch = () => {

    if (this.state.query === '') {
      this.setState({
        message: 'Please search for an author'
      })
    } else if (this.state.filteredApi.length === 0) {
      this.setState({
        message: 'No news posted by that author or please ensure correct spelling'
      })
    } else {

    let searchResults = []

    this.state.filteredApi.forEach((element) => {
      let results = {
        url: element.url, 
        title: element.title,
        author: element.author,
        points: element.points, 
        sText: element.story_text, 
        cText: element.comment_text, 
        created: element.created_at 
      }

      if (element.author.toLowerCase() === this.state.query.toLowerCase().replace(/^[ ]+|[ ]+$/g,'') || 
      element.author.toUpperCase() === this.state.query.toUpperCase().replace(/^[ ]+|[ ]+$/g,'') || 
      element.author === this.state.query.replace(/^[ ]+|[ ]+$/g,'')) {
        searchResults.push(results)
      }
    })

      this.setState({
        results: searchResults
      })
    }
  }

  render() {
  
    const mapPN = this.state.results === null ? null : this.state.results.map((param) => {
      return (
        <News
        key={param.url}
        title={param.title}
        url={param.url}
        author={param.author}
        points={param.points}
        sText={param.sText}
        cText={param.cText}
        date={param.created}
        />
      )
    })

    const message = this.state.message === '' ? null : <ul className='messageBox'> <li className='message'> {this.state.message} </li> </ul>

    const display = this.state.results === null ? message : mapPN

  return (
    <div className="App">
      <header className='title'> Hacker News </header>
      
      <AddQuery 
        onSearch={this.onSearch}
        onInput={this.onInput}
        query={this.state.query}
      />
      
      <ul className='display'> {display} </ul>
      
    </div>
    )
  }
}


export default App
