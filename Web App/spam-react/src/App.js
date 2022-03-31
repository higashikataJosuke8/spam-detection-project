import "./style.css";
import { useState } from "react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Analytics from "./Component/Analytics/Analytics";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Result from "./Component/Result/Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//"serve -s build", (package.json script start)
//"react-scripts start"
//heroku config:set APP_URL=jorenweb.herokuapp.com
function App() {
  const [type, setType] = useState("Email");
  const [content, setContent] = useState("");

  const changeType = (e) => {
    setType(e);
  };
  const changeContent = (e) => {
    setContent(e);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home
                type={type}
                content={content}
                changeType={changeType}
                changeContent={changeContent}
              />
            )}
          />
          <Route path="/analytics" exact component={() => <Analytics />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route
            path="/result"
            exact
            component={() => (content!=='') ? 
            <Result type={type} content={content} /> : 
            <Home 
            type={type}
            content={content}
            changeType={changeType}
            changeContent={changeContent}
            />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
