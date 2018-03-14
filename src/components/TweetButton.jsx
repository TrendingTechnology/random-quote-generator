import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Send from 'material-ui/svg-icons/content/send';

const styles = {
  button: {
    margin: 12,
  },
};

class TweetButton extends Component {
  handleButtonClick = () => {
    console.log(this.props.tweetURL);
    window.location.href = this.props.tweetURL;
  };

  render() {
    return (
      <RaisedButton
        label="Tweet"
        labelPosition="before"
        primary={true}
        icon={<Send />}
        style={styles.button}
        onClick={this.handleButtonClick}
      />
    );
  }
}

export default TweetButton;
