import React from "react";
import Blog from "./pages/Blog";
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
    <div className="App">
      <Header />
      <main className="content">
        <Blog />
        <Sidebar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
