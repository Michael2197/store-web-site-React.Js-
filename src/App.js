import logo from './logo.svg';
import './App.css';
import {Link,Outlet} from 'react-router-dom';
import LoginP from './Components/React project/LoginP';
import Header from './Components/React project/Header';
import Footer from './Components/React project/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/React project/Home';
import Containt from './Components/React project/Main';
import Card from './Components/React project/Card';
import { Singlepg } from './Components/React project/Singlepg';




// header css file
import '../src/css/header.css';
import '../src/css/Main.css'
import '../src/css/Products.css'
import '../src/css/singlepg.css';
import '../src/css/Login.css';
import '../src/css/Footer.css';






function App() {
  return (

     <>
     <Header/>
     <Routes>
      <Route path='/Login' element={<LoginP/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Singlepg/>}/>
      <Route path='/Card' element={<Card/>}/>
     </Routes>
      <Footer/>
      
    </>
  )
}

export default App;
