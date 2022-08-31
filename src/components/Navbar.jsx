import React from 'react'
import { Link } from "react-router-dom";
// import Main from "./Main"
import Logo from '../assets/logo.png'
import"./Navbar.css"
function Navbar() {
  return (
    <div className='navbar'>
      {/* <Main/> */}
        <nav>
        <Link to='/'> <img src={Logo} alt="logo" /></Link>
        </nav>
        <div class="nav">
            <a href="">O'Z / РУ</a>
            <a href="">Сообщения</a>
            <a href="">Ваш профиль</a>
            <button>Подать Обьявление</button>
        </div>
    </div>
  )
}

export default Navbar