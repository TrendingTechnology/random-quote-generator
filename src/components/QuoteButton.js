import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';

const styles = {
  button: {
    margin: 12,
  },
};

const QuoteButton = React.memo(function QuoteButton({ fetchQuoteFromAPI }) {
  return (
    <RaisedButton
      style={styles.button}
      label="New Quote"
      labelPosition="before"
      icon={<AutoRenew />}
      onClick={fetchQuoteFromAPI}
      primary
    />
  );
});

QuoteButton.displayName = 'QuoteButton';

QuoteButton.propTypes = {
  fetchQuoteFromAPI: PropTypes.func.isRequired,
};

export default QuoteButton;
