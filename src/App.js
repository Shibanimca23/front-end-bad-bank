import './App.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import MyNavbar from './navbar';
import Create from './create';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import userContext from './context';
import Home from './home';
// import Footer from './footer';

function App() {
  return (
    <>
    <MyNavbar/> 
    <userContext.Provider value={{'users' :[{'id':1,'name':'XYZ','email' : 'xyz@gmail.com', 'password' : '123' , 'amount' : 100}]}}>
    <HashRouter>

    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/deposit' element={<Deposit/>}></Route>
      <Route path='/withdraw' element={<Withdraw/>}></Route>
      <Route path='/alldata' element={<AllData/>}></Route>
    </Routes>
    
    </HashRouter>
    </userContext.Provider>
    {/* <Footer/> */}
    </>
  );
}

export default App;
