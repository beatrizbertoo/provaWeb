import React from 'react';
import Header from './provadesweb./components/Header';
import Footer from './provadesweb./components/Footer';
import Conteudo from './provadesweb./components/Conteudo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <strong>Home</strong>
      <Conteudo />
      <Footer />
    </div>
  );
}

export default App;
