import React from 'react';

const styles = {
  header: {
    gridArea: 'header',
    fontSize: '60px',
    alignSelf: 'end',
    fontFamily: "'Playfair Display', serif",
  },
};

const Header = () => (
  <header className="header" style={styles.header}>
    Random Quote Generator
  </header>
);

export default Header;
