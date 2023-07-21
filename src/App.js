import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './components/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Form from './pages/QickLinks/Form'
import About from './pages/About';
import Submenu from './components/Submenu';
import Library from './pages/Library'
import Academics from './pages/Academics'
import Tenders from './pages/Tenders'
import TendersForm from './pages/Secretary/TendersForm'
import Teachers from './pages/QickLinks/Teachers'
import Stuffs from './pages/QickLinks/Stuffs'
import Footer from './components/Footer'
import Students from './pages/QickLinks/Students'
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from './redux/features/authSlice';
import Form4East from './pages/Classes/Form4East';
import Admin from './pages/Admin';
import Summarypage from './pages/Summarypage';
import Assignments from './pages/QickLinks/Assignments';
import Control from './pages/Control';
import Main from './pages/Main';
import PostedAss from './pages/QickLinks/PostedAss';
import News from './pages/Secretary/News';
import Meeting from './pages/Secretary/Meeting';
import Events from './pages/Secretary/Events';
import Middle from './pages/QickLinks/Middle';
import TenderQuiz from './pages/Secretary/TenderQuiz';
import Results from './pages/Secretary/Results';
import Header from './components/Header';
import Bursur from './pages/Bursur';
import Dp from './pages/Dp';
import ForgetPassword from './pages/ForgetPassword';
import RevisionMaterials from './pages/QickLinks/RevisionMaterials';
import Remarks from './pages/Remarks';
import Users from './pages/Secretary/Users';

function App() {
  // const { cartItems, isLoading } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.modal);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getCartItems('random'));
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  const dispatch = useDispatch();
  const[data,setDate]=useState([])
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter >
    <ToastContainer/>
     <Navbar/>
    <Header/>
   
    {/* <Topbar/> */}
    
      
      
      {/* <Submenu /> */}
    <div className='App'>
    <Routes>
      <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/academics' element={<Academics/>}/>
   <Route path='/tenders' element={<Tenders/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/students' element={<Students/>}/>
   <Route path='/teachers' element={<Teachers/>}/>
   <Route path='/stuffs' element={<Stuffs/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/library' element={<Library/>}/>
   <Route path='/form4east' element={<Form4East/>}/>
   <Route path='/admin' element={<Admin/>}/>
   <Route path='/ass' element={<Assignments/>}/>
   <Route path='/control' element={<Control/>}/>
   <Route path='/main' element={<Main/>}/>
   <Route path='/f' element={<Form/>}/>
   <Route path='/stdass' element={<PostedAss/>}/>
   <Route path='/tenderform' element={<TendersForm/>}/>
   <Route path='/news' element={<News/>}/>
   <Route path='/meetings' element={<Meeting/>}/>
   <Route path='/events' element={<Events/>}/>
   <Route path='/middle' element={<Middle/>}/>
   <Route path='/tenderquiz' element={<TenderQuiz/>}/>
   <Route path='/results' element={<Results/>}/>
   <Route path='/bursor' element={<Bursur/>}/>
   <Route path='/dp' element={<Dp/>}/>
   <Route path='/forget' element={<ForgetPassword/>}/>
   <Route path='/revisionmaterials' element={<RevisionMaterials/>}/>
   <Route path='/remarks' element={<Remarks/>}/>
   <Route path='/users' element={<Users/>}/>
    </Routes>
    </div>
   <Summarypage/>
    <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
