import logo from './logo.svg';
import './App.css';
import Nav from './nav.js'
import First from './first.js'
import Cards from './cards'
import Sec from './sec'
import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion"
import Next from './next.js'
import Nextt from './nextt.js'
import Nexttt from './nexttt.js'
import Foot from './foot.js'

function App() {
  
  return (
    <div className=' '>
      <div className="App w-max bg-black">
        <Nav></Nav>
        <Cards></Cards>
      </div>
      {/* <First></First>s */}
     <div className='w-max bg-black'>
     <Sec></Sec>
     <Next></Next>
      <Nextt></Nextt>
     </div>
      <Nexttt></Nexttt>
     
      
      <Foot></Foot>
      <script src={require('.')}></script>
      
    </div>
  );
}

export default App;
