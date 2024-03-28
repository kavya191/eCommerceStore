
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Viewsingle from './Pages/Viewsingle';

import Categories from './Pages/Categories';
import UserList from './Pages/UserList';
import SingleCategory from './Pages/Singlecategory';
function App() {
  
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/single/:id' element={<Viewsingle/>}/>
      <Route path='/category' element={<Categories/>}/>
      <Route path='/singlecat/:id' element={<SingleCategory/>}/>
      <Route path='user' element={<UserList/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
