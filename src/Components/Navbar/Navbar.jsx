import "./navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notifcation_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from "react-router-dom"


const Navbar = ({setSidebar})=>{
    return (
<>
<nav className="flex-div">
    <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
        <Link to="/"><img className="logo" src={logo} /></Link>
    </div>
    <div className="nav-middle flex-div">
        <div className="searchbox flex-div">
        <input type="text" placeholder="search"/>
        <img className="search" src={search_icon} />
        </div>
    </div>
    <div className="flex-div nav-right">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notifcation_icon} alt="" />
        <img src={profile_icon} alt="" />
    </div>
    </nav>
    </>
    )
}

export default Navbar;