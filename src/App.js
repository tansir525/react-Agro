import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import GlobalStyle from '../src/Components/styles/GlobalStyle';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div>
    <Header/>
    {/* <Navbar/> */}
    <Home/>
    <Footer/>
    <GlobalStyle/>
    </div>
  );
}

export default App;
