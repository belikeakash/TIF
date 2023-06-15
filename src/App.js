import './App.css';
import About from './components/About';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Articles />
      <Contact />
    </div>
  );
}

export default App;
