import './App.css';
import Header from "./components/Header/Header"
import Skills from "./components/Skills/Skills"
import Gallery from "./components/Gallery/Gallery"
import Video from "./components/Video/Video"
import Price from './components/Price/Price';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
        <Header/>
        <Skills/>
        <Gallery/>
        <Video/>
        <Price/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
