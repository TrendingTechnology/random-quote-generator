import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Send from 'material-ui/svg-icons/content/send';

const styles = {
  button: {
    margin: 12,
  },
};

class TweetButton extends Component {
  handleClick = () => {
    window.open(this.props.tweetURL, 'noopener');
  };

  render() {
    return (
      <RaisedButton
        style={styles.button}
        label="Tweet"
        labelPosition="before"
        icon={<Send />}
        onClick={this.handleClick}
        primary
      />
    );
  }
}

TweetButton.propTypes = {
  tweetURL: PropTypes.string.isRequired,
};

export default TweetButton;
