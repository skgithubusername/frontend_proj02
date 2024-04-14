import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from "./comp/Page1";
import Page2 from './comp/Page2';
import Page3 from './comp/Page3';
import Page5 from './comp/Page5';
import Page4 from './comp/Page4';
import Page6 from './comp/Page6';
import Page7 from './comp/Page7';



function App() {
  return (
    // <div className="App">
    //  <Page1/>
    // </div>
     <Router>
     <Routes>
       <Route path="/" element={<Page1/>} />
       <Route path="/page2" element={<Page2/>} />
       <Route path="/page3" element={<Page3/>} />
       <Route path="/page4" element={<Page4/>} />
       <Route path="/page5" element={<Page5/>} />
       <Route path="/page6" element={<Page6/>} />
       <Route path="/page7" element={<Page7/>} />
       
     </Routes>
   </Router>
  );
}

export default App;
