import { Link, useNavigate } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import { AuthContext } from '../Auth/Auth_context';
// import { Redirect } from 'react-router-dom';


const MainNavigation = () => {
  const authCon=useContext(AuthContext)
  const logoutnavigator=useNavigate()
  const isLog=authCon.isLoggin
  const logoutHandler=()=>{
    authCon.logout()
    // return(
    // <Redirect to='/' >
    logoutnavigator('/')
      
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLog && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {isLog && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
          {isLog && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
