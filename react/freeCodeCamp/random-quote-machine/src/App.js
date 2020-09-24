import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Quote = (props) => {
  return (
  <div id='text' style={props.styles}>{props.quote}</div>
  )
}

const Author = (props) => {
  return (
    <div id='author' style={props.styles}>{props.author}</div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: '',
    }

    this.fetchQuotes = this.fetchQuotes.bind(this)
    this.selectRandomQuote = this.selectRandomQuote.bind(this)
  }

  componentDidMount() {
    this.fetchQuotes()
  }

  fetchQuotes() {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data,
          quotesLength: data.length,
        })
        this.selectRandomQuote()
      })
  }

  selectRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.state.quotesLength)
    this.setState({
      quote: this.state.quotes[randomIndex].text,
      author: this.state.quotes[randomIndex].author,
    })
  }

  render() {
    const bgColors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#fff200', '#FB6964', '#342224', "#472E32", "#e27831", "#77B1A9", "#77c621"];
    const randomIndex = Math.floor(Math.random() * 12)
    document.body.style.background = bgColors[randomIndex]
    document.body.style.background = `-webkit-linear-gradient(top left, ${bgColors[randomIndex]}, #734C95)`
    document.body.style.background = `-moz-linear-gradient(top left, ${bgColors[randomIndex]}, #734C95)`
    document.body.style.background = `linear-gradient(to bottom right, ${bgColors[randomIndex]}, #734C95)`
    document.body.style.color = bgColors[randomIndex]

    const quoteBoxStyle = {
      borderRadius: '10px',
      position: 'relative',
      width: '50%',
      margin: '0 auto',
      padding: '40px 50px',
      display: 'table',
      backgroundColor: '#fff',
    }

    const quoteTextStyle = {
      textAlign: 'center',
      width: 'auto',
      height: 'auto',
      clear: 'both',
      fontWeight: '500',
      fontSize: '1.75em',
      justifyContent: 'center',
    }

    const authorStyle = {
      width: 'auto',
      height: 'auto',
      clear: 'both',
      paddingTop: '20px',
      fontSize: '1em',
      textAlign: 'right',
    }

    const newButtonStyle = {
      float: 'right',
      backgroundColor: '#734C95',
      color: 'white',
      border: '0px',
      padding: '10px',
      borderRadius: '10px',
    }

    const tweetButtonStyle = {
      float: 'left',
      padding: '0px',
      paddingTop: '8px',
      textAlign: 'center',
      fontSize: '1.2em',
      marginRight: '5px',
      height: '30px',
      width: '40px',
      color: '#734C95',

    }

    const link = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${this.state.quote} ${this.state.author}`;
    return (
      <div id='bg'>
        <div id='quote-box' style={quoteBoxStyle}>
          <Quote quote={this.state.quote} styles={quoteTextStyle} />
          <Author author={this.state.author} styles={authorStyle} />
          <br />
          <div>
            <a id='tweet-quote' className='twitter-square' href={link} target='_blank' style={tweetButtonStyle}>
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
            <button id='new-quote' onClick={this.selectRandomQuote} style={newButtonStyle}>New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
