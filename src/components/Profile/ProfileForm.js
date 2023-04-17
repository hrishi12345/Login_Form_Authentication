import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import { AuthContext } from '../Auth/Auth_context';


const ProfileForm = () => {
  const pass=useRef()
  const tok=useContext(AuthContext)
  const submitHandler=(event)=>{
    event.preventDefault()
    const newPass=pass.current.value
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCR1tfldY3tGoHgIHRJFEULd1C5XYv8kKQ',{
      method:'POST',
      body:JSON.stringify({
        idToken:tok.token,
        password:newPass,
        returnSecureToken:true
      })
    })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={pass}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
