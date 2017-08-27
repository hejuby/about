import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
