import Navigation from './Components/Navigation';
import Slides from './Components/Slides';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Clients from './Containers/Clients';
import Blogs from './Containers/Blogs';
import Contact from './Containers/Contact'
import Footer from './Components/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      <Slides/>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/About" component={About} exact></Route>
        <Route path="/Services" component={Services} exact></Route>
        <Route path="/Clients" component={Clients} exact></Route>
        <Route path="/Blogs" component={Blogs} exact></Route>
        <Route path="/Contact" component={Contact} exact></Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
