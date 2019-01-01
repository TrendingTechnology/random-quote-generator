import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import DisplayQuote from './DisplayQuote';
import Buttons from './Buttons';
import Footer from './Footer';
import hub from '../utils/sentry';

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
  state = {
    author: '',
    quote: '',
    tweetURL: '',
  };

  fetchQuoteFromAPI = () => {
    axios
      .get('https://andruxnet-random-famous-quotes.p.mashape.com/?count=1', {
        headers: {
          'X-Mashape-Key': 'MMVXPGoBJMmshKtoRwOtwup6TioAp1ZoiQajsnh5k2NbdUPA7s',
          Accept: 'application/json',
        },
      })
      .then(response => {
        const [quote, author] = Object.values(response.data[0]);
        const tweetURL = `https://twitter.com/intent/tweet?text="${quote}" - ${author}. http://bit.ly/2s06P9n`;
        this.setState(() => ({ author, quote, tweetURL }));
      })
      .catch(err => {
        console.error(err);
        hub.captureException(err);
      });
  };

  componentDidMount = () => {
    this.fetchQuoteFromAPI();
  };

  render() {
    const { author, quote, tweetURL } = this.state;
    return (
      <div className="app" style={styles.app}>
        <Header />
        <DisplayQuote author={author} quote={quote} />
        <Buttons fetchQuoteFromAPI={this.fetchQuoteFromAPI} tweetURL={tweetURL} />
        <Footer />
      </div>
    );
  }
}

export default App;
