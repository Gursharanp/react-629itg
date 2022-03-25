import React,{useState} from 'react';
import styles from './Login.module.css'
function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className={styles.logmain}>
      <div className={styles.emain}>
       <div className={styles.etext}>Email </div>
       <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className={styles.pmain}>   
      <div className={styles.ptext} >Password</div>
    <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
    </div> 
    <button>Login</button>
    <div className={styles.text}>Back</div>
    <div className={styles.new}> Create-New-Account</div>
    </div>
  )
}

export default Login