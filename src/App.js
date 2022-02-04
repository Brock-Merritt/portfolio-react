// import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import Page from './components/Page';
import Portfolio from './components/Portfolio';


function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    }
  ]);
  const [
    currentPage,
    setCurrentPage
  ] = useState(pages[0]);
  

  return (
    <div className="App">
      <Header className="App-header">
      <Nav 
      pages={pages}
      setCurrentPage={setCurrentPage} 
      currentPage={currentPage}>

      </Nav>
      </Header>

      <main>
        <Page currentPage={currentPage}>
        </Page>
      </main>
      
      
      <Footer />
    </div>
  );
}

export default App;
