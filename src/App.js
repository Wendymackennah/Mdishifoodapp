import NavBar from "./components/NavBar";
import Pages from "./components/Pages/Pages";
import './App.css'
import Footer from './components/Footer';

function App(){
  return(
  <div className="main">
    <NavBar/>
    <Pages />
    <Footer />
  </div>
  )
}

export default App