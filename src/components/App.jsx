import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import DisplayQuote from './DisplayQuote.jsx';
import Buttons from './Buttons.jsx';
import Footer from './Footer.jsx';

const styles = {
  app: {
    height: '100vh',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: '30%',
    gridTemplateAreas: "'header' 'content' 'buttons' 'footer'",
  },
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      author: '',
      quote: '',
      link: '',
      tweetURL: '',
    };
  }

  generateQuote = () => {
    axios
      .get('https://andruxnet-random-famous-quotes.p.mashape.com/?count=1', {
        headers: {
          'X-Mashape-Key': 'MMVXPGoBJMmshKtoRwOtwup6TioAp1ZoiQajsnh5k2NbdUPA7s',
          Accept: 'application/json',
        },
      })
      .then(response => {
        const [quote, author] = Object.values(response.data);
        const tweetURL = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;
        this.setState(() => ({ author, quote, tweetURL }));
      })
      .catch(err => {
        console.log(`${err} whilst contacting the API.`);
      });
  };

  componentDidMount = () => {
    this.generateQuote();
  };

  render() {
    return (
      <div className="app" style={styles.app}>
        <Header />
        <DisplayQuote author={this.state.author} quote={this.state.quote} />
        <Buttons generateQuote={this.generateQuote} tweetURL={this.state.tweetURL} />
        <Footer />
      </div>
    );
  }
}

export default App;
