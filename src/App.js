import Homepage from "./views/Homepage";
import News from "./views/News";
import Star from "./views/Star"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Login from "./views/Login";
import Registr from "./views/Registr";



function App() {
  return (
  <Router>
      <Route exact path="/"><Homepage /></Route>
      <Route path="/news"><News /></Route>
      <Route path="/star/:id"><Star/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/registr"><Registr/></Route>
  </Router>
  );
}

export default App;
