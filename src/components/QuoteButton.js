import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';

const styles = {
  button: {
    margin: 12,
    fontFamily: 'Montserrat, sans-serif',
  },
};

const QuoteButton = ({ fetchQuoteFromAPI }) => (
  <RaisedButton
    style={styles.button}
    label="Get new quote"
    labelPosition="before"
    icon={<AutoRenew />}
    onClick={fetchQuoteFromAPI}
    primary
  />
);

QuoteButton.displayName = 'QuoteButton';

QuoteButton.propTypes = {
  fetchQuoteFromAPI: PropTypes.func.isRequired,
};

export default memo(QuoteButton);
