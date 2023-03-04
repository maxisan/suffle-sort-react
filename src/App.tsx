import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme'
import Header from './components/Header';
import Footer from './components/Footer';
import { MainContent } from './components';
import TilesContainer from './components/TilesContainer';
import ButtonsContainer from './components/ButtonsContainer';
import { initialTiles } from './constants';


function App() {
  const [tiles, setTiles] = useState([...initialTiles])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainContent>
          <TilesContainer tiles={tiles} />
          <ButtonsContainer setTiles={setTiles} tiles={tiles} />
        </MainContent>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
