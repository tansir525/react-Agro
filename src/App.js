import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import GlobalStyle from '../src/Components/styles/GlobalStyle';


function App() {
  return (
    <div>
    <Header/>
    <Home/>
    <Footer/>
    <GlobalStyle/>
    </div>
  );
}

export default App;
