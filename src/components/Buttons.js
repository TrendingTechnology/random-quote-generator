import React, { memo } from 'react';
import PropTypes from 'prop-types';

import QuoteButton from './QuoteButton';
import TweetButton from './TweetButton';

const styles = {
  buttons: {
    gridArea: 'buttons',
    marginTop: 40,
  },
};

const Buttons = ({ fetchQuoteFromAPI, tweetURL }) => (
  <div className="buttons" style={styles.buttons}>
    <QuoteButton fetchQuoteFromAPI={fetchQuoteFromAPI} />
    <TweetButton tweetURL={tweetURL} />
  </div>
);

Buttons.displayName = 'Buttons';

Buttons.propTypes = {
  fetchQuoteFromAPI: PropTypes.func.isRequired,
  tweetURL: PropTypes.string.isRequired,
};

export default memo(Buttons);
