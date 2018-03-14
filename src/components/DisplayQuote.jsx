import React, { Component, Fragment } from 'react';
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

const DisplayQuote = props => (
  <div className="content" style={styles.content}>
    <Card className="card" style={styles.card}>
      <CardTitle className="title" style={styles.title}>
        {props.author}
      </CardTitle>
      <CardText className="quote" style={styles.quote} dangerouslySetInnerHTML={{ __html: props.quote }} />
    </Card>
  </div>
);

export default DisplayQuote;
