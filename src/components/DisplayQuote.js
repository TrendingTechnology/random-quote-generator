import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  content: {
    gridArea: 'content',
    alignSelf: 'end',
    width: '60vw',
    margin: '0 auto',
  },
  card: {
    height: '180px',
  },
  title: {
    fontSize: '24px',
  },
  quote: {
    fontSize: '20px',
  },
};

const DisplayQuote = React.memo(function DisplayQuote({ author, quote }) {
  return (
    <div className="content" style={styles.content}>
      <Card className="card" style={styles.card}>
        <CardTitle className="title" style={styles.title}>
          {author}
        </CardTitle>
        <CardText
          className="quote"
          style={styles.quote}
          dangerouslySetInnerHTML={{ __html: quote }}
        />
      </Card>
    </div>
  );
});

DisplayQuote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default DisplayQuote;
