import React from 'react';

const styles = {
  footer: {
    gridArea: 'footer',
    alignSelf: 'end',
    paddingBottom: '20px',
  },
};

const Footer = () => (
  <footer className="footer" style={styles.footer}>
    Created by A-J Roos
  </footer>
);

export default Footer;
