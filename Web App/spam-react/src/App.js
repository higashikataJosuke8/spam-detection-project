import './style.css';
import {useEffect} from 'react';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Analytics from './Component/Analytics';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Result from './Component/Result';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  useEffect(() => {
    fetch("/home").then(response => {
      if(response.status === 200){
        return response.json()
      }
    }).then(data => console.log(data))
    .then(error => console.log(error))
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/analytics" exact component={() => <Analytics />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/result" exact component={() => <Result />} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
