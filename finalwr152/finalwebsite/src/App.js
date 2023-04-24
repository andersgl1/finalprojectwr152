import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import Intro from './components/Intro';
import Logo from './components/Logo';
import Data from './components/Data';
import Methods from './components/Methods';
import Conclusion from './components/Conclusion';
import About from './components/About';

function App() {

  return (
    <body 
      id="app"
    >
      <Logo/>
      <Tab/>
      
      <Intro
        id="intro-section"
      />
      <Methods/>
      <Data/>
      <Conclusion/>
      <About/>
    </body>
  );
}

export default App;
