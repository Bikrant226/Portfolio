import Header from "./components/Header";
import Content from "./components/Content";
import Work from "./components/Work";
import Contact from "./components/Contact";
import About from "./components/About";
import Photos from './components/Photos';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   
      <div>
          <Header/>
          <Routes>
            <Route path="/" element={<> <Content/>  <img src="/assets/vc.jpg" alt="hh" /></>}/>
            <Route path="/about" element={<About/>}/>            
            <Route path="/work" element={<Work/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/photos" element={<Photos/>}/>
          </Routes>
      </div>
   
  );
}

export default App;
