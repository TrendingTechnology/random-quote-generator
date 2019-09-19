import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  content: {
    gridArea: 'content',
    alignSelf: 'end',
    width: '60vw',
    justifySelf: 'center',
  },
  card: {
    height: '180px',
    paddingTop: 10,
  },
  title: {
    fontSize: '24px',
    fontFamily: "'Playfair Display', serif",
  },
  quote: {
    fontSize: '20px',
    fontFamily: 'Montserrat, sans-serif',
  },
};

const DisplayQuote = ({ author, quote }) => (
  <div className="content" style={styles.content}>
    <Card className="card" style={styles.card}>
      <CardTitle className="title" style={styles.title}>
        {author}
      </CardTitle>
      <CardText className="quote" style={styles.quote}>
        {quote}
      </CardText>
    </Card>
  </div>
);

DisplayQuote.defaultProps = {
  author: 'Loading...',
  quote: 'Loading...',
};

DisplayQuote.propTypes = {
  author: PropTypes.string,
  quote: PropTypes.string,
};

export default DisplayQuote;
