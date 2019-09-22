import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import Header from './Header';
import DisplayQuote from './DisplayQuote';
import Buttons from './Buttons';

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

const INITIAL_STATE = { author: '', quoteText: '', tweetURL: '' };

const App = () => {
  const [quoteObj, setQuote] = useState(INITIAL_STATE);

  const fetchQuoteFromAPI = useCallback(() => {
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
        setQuote({ author, quote, tweetURL });
      })
      .catch(err => {
        console.error(err);
        hub.captureException(err);
      });
  }, []);

  useEffect(() => {
    fetchQuoteFromAPI();
  }, [fetchQuoteFromAPI]);

  const { author, quote, tweetURL } = quoteObj;

  return (
    <>
      <Helmet>
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112825816-5" />
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-112825816-5');
            `}
        </script>
      </Helmet>
      <div className="app" style={styles.app}>
        <Header />
        <DisplayQuote author={author} quote={quote} />
        <Buttons fetchQuoteFromAPI={fetchQuoteFromAPI} tweetURL={tweetURL} />
      </div>
    </>
  );
};

export default App;
