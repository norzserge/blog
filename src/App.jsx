import React from "react";
import Blog from "./pages/Blog";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
