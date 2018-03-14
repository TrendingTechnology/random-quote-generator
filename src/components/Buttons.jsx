import React from 'react';
import QuoteButton from './QuoteButton.jsx';
import TweetButton from './TweetButton.jsx';

const styles = {
  buttons: {
    gridArea: 'buttons',
  },
};

const Buttons = props => (
  <div className="buttons" style={styles.buttons}>
    <QuoteButton generateQuote={props.generateQuote} />
    <TweetButton tweetURL={props.tweetURL} />
  </div>
);

export default Buttons;
