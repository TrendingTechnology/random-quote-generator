import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Send from 'material-ui/svg-icons/content/send';

const styles = {
  button: {
    margin: 12,
    fontFamily: 'Montserrat, sans-serif',
  },
};

const TweetButton = ({ tweetURL }) => {
  const handleClick = () => {
    window.open(tweetURL, 'noopener');
  };

  return (
    <RaisedButton
      style={styles.button}
      label="Tweet this quote"
      labelPosition="before"
      icon={<Send />}
      onClick={handleClick}
      primary
    />
  );
};

TweetButton.displayName = 'TweetButton';

TweetButton.propTypes = {
  tweetURL: PropTypes.string.isRequired,
};

export default memo(TweetButton);
