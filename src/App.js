import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contacts/>
    </div>
  );
}

export default App;
