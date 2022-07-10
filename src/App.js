import './App.css';
import Nav from './Components/Navbar/Nav'
import Header from './Containers/Header/Header'
import Brand from './Components/Brand/Brand'
import About from './Containers/About/About'
import Features from './Containers/Features/Features'
import Possibility from './Containers/Possibility/Possibility'
import CTA from './Components/CTA/CTA'
import Blog from './Containers/Blog/Blog'
import Footer from './Containers/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
           <Nav/>
           <Header/>
      </div>
      <About/>
      <Features/>
      <Possibility/>
      <Brand/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
