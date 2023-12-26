import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
// import routes  from 'module';
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={(e) => {setMenu("shop")}}> <Link to='/' style={{textDecoration:"none"}}>SHOP</Link>{menu==="shop" ? <hr />:<></> } </li>
            <li onClick={(e) => {setMenu("men")}}> <Link to='/mens' style={{textDecoration:"none"}}>MEN</Link> {menu==="men" ? <hr />:<></> }</li>
            <li onClick={(e) => {setMenu("women")}}><Link to='/womens' style={{textDecoration:"none"}}>WOMEN</Link> {menu==="women" ? <hr />:<></> }</li>
            <li onClick={(e) => {setMenu("kids")}}><Link to='/kids' style={{textDecoration:"none"}}>KIDS</Link> {menu==="kids" ? <hr />:<></> }</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
