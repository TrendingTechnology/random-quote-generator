import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoRenew from 'material-ui/svg-icons/action/autorenew';

const styles = {
  button: {
    margin: 12,
  },
};

class QuoteButton extends Component {
  render() {
    return (
      <RaisedButton
        label="New Quote"
        labelPosition="before"
        primary={true}
        icon={<AutoRenew />}
        style={styles.button}
        onClick={this.props.generateQuote}
      />
    );
  }
}

export default QuoteButton;
