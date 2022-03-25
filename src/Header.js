import React from 'react';
import Login from './Login'
import Signin from './SignIn'
import { Link} from 'react-router-dom';
function Header(){
  return (
  <>
   <div className="header">
     <Link to="Login">
     <div className="Login">Login-In</div>
     </Link>
     <Link to="Signin">
     <div className="Sign-In"> Sign-In</div>
     </Link>   
   </div>
   
  </>
  )
}

export default Header;