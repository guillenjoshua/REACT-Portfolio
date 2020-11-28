import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FrontPage from './components/FrontPage/FrontPage'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
    </div>
    </Router> 
  );
}

export default App;
