import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>


<div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">𝙿𝚒𝚌𝚔𝚄𝚙!
                </h2>
            </div>

            <div class="menu">
                <ul>
                    <li><a href="front.html">HOME</a></li>
                    <Link to="/register">REGISTER</Link>
                    <li><a href="ADMINLOGIN.html">ADMIN</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>

           
        </div> 
        <div class="content">
            
            <h1> 𝐄 𝐖𝐚𝐬𝐭𝐞 <span>𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 </span> </h1>
            <p class="par" >
                <font size="5">
                WHEN YOU
                REFUSE TO REUSE,
                IT'S THE EARTH
                YOU ABUSE
                </font>
            </p>

                <button class="cn"><a href="#">𝗝𝗢𝗜𝗡 𝗨𝗦</a></button>

                <div class="form">
                    <h2>𝙻𝚘𝚐𝚒𝚗 𝙷𝚎𝚛𝚎
                    </h2>
                    <input type="email" name="email" placeholder=" 𝐄𝐦𝐚𝐢𝐥 "/>
                    <input type="password" name="password" placeholder=" 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 "/>
                    <button class="btnn"><a href="#">𝐋𝐨𝐠𝐢𝐧 𝐇𝐞𝐫𝐞</a></button>

                    <p class="link">𝗗𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗮𝗻 𝗮𝗰𝗰𝗼𝘂𝗻𝘁
                    <a href="#">𝗦𝗶𝗴𝗻 𝘂𝗽</a></p>

                    <div class="icons">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                    </div>

                </div>
                    </div>
                
                </div>
               
    </div>
  )
}

export default Home