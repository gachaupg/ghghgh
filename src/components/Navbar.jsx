import { CartIcon } from '../icons';

import { useDispatch, useSelector } from 'react-redux';
import {BsFacebook ,BsTwitter,BsInstagram} from 'react-icons/bs'
import {MdAddIcCall,MdOutgoingMail} from 'react-icons/md'
import { setLogout } from '../redux/features/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {user}=useSelector((state)=>({...state.auth}))
  const navigate=useNavigate()

  const dispatch=useDispatch()
  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/')
  };

  return (
    <>
      <nav>
        <div className='nav-center'>
        <div className='icon'>
       <MdAddIcCall/> 056620015
          
        <MdOutgoingMail className='none'/>  butereboys@yahoo.com
          </div>
          <div  className='social-media'>
          <a href="https://web.facebook.com/profile.php?id=100067064439839">
<BsFacebook style={{color:'white'}}/>
          </a>
          <a href="https://web.facebook.com/profile.php?id=100067064439839">
<BsTwitter style={{color:'white'}}/>
          </a>
          <a href="nstagram.com/explore/locations/257256154/boys-high-school/">
<BsInstagram style={{color:'white'}}/>
          </a>
          </div>
          {user?.email?._id  ? <>
          <button  onClick={() => handleLogout()} className="btn">
           <h5 style={{color:'white'}}> logout</h5>
          </button>
          </>:<>
          <button  className="btn">
            <Link to='/login'>
              <h5 style={{color:'white'}}>login</h5> 
            </Link>
           
          </button>

          </>}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
