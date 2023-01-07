import { useRef } from "react"
import "./Header.css"
import {FaBars, FaTimes, FaSearch} from "react-icons/fa"

const Header =()=>{
    const navRef= useRef()
    const btnRef = useRef()
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    const closeNavbar = ()=>{
        btnRef.current.classList.toggle("responsive_nav")
    }

    return(
        <div className="container_header" id="nav" >
            <div className="logo">
                <img src="./images/logo2.png" class="imglogo"/>
                <div ref={navRef} className="trans">
                    <ul class="b links" >
                        <li><a href="">Home </a></li>
                        <li><a href="">TV shows</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Latest</a></li>
                        <li><a href="">My List</a></li>
                        <li><a href="">Audio& Subtitles</a></li>

                    </ul>
                </div>
            </div>
            <div className="buttons trans" ref={btnRef}>

                <a href=""  id="btn" ><FaSearch/></a>
                <a className="kids" href=" " id="btn">Kids</a>
                <a href=""  id="btn">DVD</a>
                <a href="" className="fa fa-bell" id="btn"></a>
                
                <div class="dropdown">
                    <div className="dropbtn">
                        <a href=""><img src="./images/avtr.png" className="avtr"/></a>
                        <span><a className="fa fa-caret-down"></a></span>
                    </div>

                    <div className="dropdown-content">
                        <a href="#">Clinics</a>
                        <a href="#">Hospitals</a>
                            
                    </div>
                </div>
            </div>
            
            <div>
                <button onClick={showNavbar} className="nav_btn"><FaBars/></button>
                <button onClick={closeNavbar} className="nav_btn close_btn"><FaTimes/></button>
            </div>
        </div>
        
    )
}

export default Header