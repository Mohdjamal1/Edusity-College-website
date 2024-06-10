import { useEffect, useState } from "react"
import { Link } from "react-scroll";
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"

const Navbar = () => {

  const [sticky,setSticky] = useState(false);
  const [mobileView,setMobileView] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const toggleMenu = ()=>{
    mobileView ? setMobileView(false) : setMobileView(true)
  }
  
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} className="logo" />
      <ul className={mobileView ? '': 'hide-menu'}>
        <li><Link to="hero" offset={0} smooth={true} duration={500}>Home</Link></li>
        <li><Link to="programs" offset={-260} smooth={true} duration={500}>Program</Link></li>
        <li><Link to="about" offset={-145} smooth={true} duration={500}>About us</Link></li>
        <li><Link to="campus" offset={-260} smooth={true} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" offset={-260} smooth={true} duration={500}>Contact us</Link></li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu} />
    </nav>
  )
}
export default Navbar;