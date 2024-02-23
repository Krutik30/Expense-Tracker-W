import React, { useState } from 'react';
import './LoginSignup.css'
// import user_icon from "../assets/usericon.png'"
// import email_icon from "../assets/emailicon.png'"
// import password_icon from "../assets/passwordicon.png'"

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                        <div className="underline"></div>
                    
                </div>
                <div className="inputs">
                {action === 'Sign Up' ? (
                        <div>
                            {/* For Sign Up, display both First Name and Last Name */}
                            <div className="input">
                                {/* <img src={user_icon} alt="" /> */}
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className="input" style={{marginTop:'20px'}}>
                                {/* <img src={user_icon} alt="" /> */}
                                <input type="text" placeholder='Last Name'  />
                            </div> 
                        </div>
                    ) : (
                        <div></div>
                    )}
                    
                    <div className="input">
                        {/* <img src={email_icon} alt="" /> */}
                        <input type="email" placeholder='Email Id' />
                    </div>
                    <div className="input">
                        {/* <img src={password_icon} alt="" /> */}
                        <input type="password"  placeholder='Password'/>
                    </div>
                   
                    </div>
                    {action==='Sign Up'?<div className="confirm-password"> <div className="input" style={{marginTop:'20px'}}>
                        {/* <img src={password_icon} alt="" /> */}
                        <input type="password"  placeholder='Confirm Password'/>
                    </div></div>:<div></div>}            
            </div>
            {action==='Sign Up'?<div></div>:<div className="forget-password">Lost Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick = {()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"}  onClick = {()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
export default LoginSignup