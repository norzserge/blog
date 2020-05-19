import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
/*import firebase from "./firebase";

firebase.firestore().collection("posts").add({
  name: "Sergey",
  date: new Date().toLocaleDateString(),
  header: "Test header from firebase",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});*/

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <Switch>
            <Route exact path="/" component={Blog} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
