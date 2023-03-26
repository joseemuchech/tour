
import Navbar from './Components/Navbar';
//import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="container-fluid">  
    <Router>
  {/* <Header /> */}
  <Navbar />
   <Routes>
   
      <Route path="/" exact  element={< Home/>}/>
      <Route path="/about" exact  element={< About/>}/>
      <Route path="/gallery" exact  element={<Gallery />}/>
      <Route path="/contact" exact  element={<Contact />}/>
      <Route path="/service" exact  element={< Service/>}/> 
      <Route path="/Events" exact  element={< Events/>}/>
     

    </Routes>
    <Footer />
</Router>
    </div>
  );
}

export default App;
