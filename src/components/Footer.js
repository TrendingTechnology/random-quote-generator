import React from 'react';

const styles = {
  footer: {
    gridArea: 'footer',
    alignSelf: 'end',
    paddingBottom: '20px',
  },
};

const Footer = React.memo(function footer() {
  return (
    <footer className="footer" style={styles.footer}>
      <p>Created by A-J Roos</p>
    </footer>
  );
});

export default Footer;
