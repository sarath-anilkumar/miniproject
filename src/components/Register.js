import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <div>
        <div className="icon">
        <h2 className="logo">𝙿𝚒𝚌𝚔𝚄𝚙!
        </h2>
    </div>
    <div className="content">
            
        <h1> 𝐄 𝐖𝐚𝐬𝐭𝐞 <span>𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 </span> </h1>
        <p className="par" >
            <font size="5">
           "REUSE THE PAST
            RECYCLE THE PRESENT
            SAVE THE FUTURE."
            
            </font>
        </p>

            <button className="cn"><a href="#">𝗝𝗢𝗜𝗡 𝗨𝗦</a></button>

    <div className="container">
        <form id="form" action="/">
            <h1>Registration</h1>
            <div class="input-control">
                
                <input id="username" name="username" type="text" placeholder="username"/>
                <div className="error"></div>
            </div>
            <div className="input-control">
                <label for="email"><font color="white">Email</font></label>
                <input id="email" name="email" type="text"/>
                <div className="error"></div>
            </div>
            <div className="input-control">
                <label for="address"><font color="white">Address</font></label>
                <input id="address" name="address" type="text"/>
                <div className="error"></div>
            </div>
            <div className="input-control">
                <label for="password"><font color="white">Password</font></label>
                <input id="password"name="password" type="password"/>
                <div className="error"></div>
            </div>
            <div className="input-control">
                <label for="password2"><font color="white">Password again</font></label>
                <input id="password2"name="password2" type="password"/>
                <div className="error"></div>
            </div>
            <button className="btnn"><a href="#">submit</a></button>

        </form>
        </div>
    </div>
    </div>
  )
}

export default Register