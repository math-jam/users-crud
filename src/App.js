import React from 'react';
import Container from './components/Container';
import Navbar from './sections/Navbar';
import FilterPanel from './sections/Filter';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <FilterPanel />
      </Container>
    </>
  );
}

export default App;
