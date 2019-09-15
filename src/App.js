import React from 'react';
import Container from './components/Container';
import Navbar from './sections/Navbar';
import FilterPanel from './sections/Filter';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <FilterPanel />
      </Container>
      <Footer />
    </>
  );
}

export default App;
