import "./Sidebar.css"
import home from "../../assets/home.png"
import game_icon from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"

const Sidebar = ({sidebar,category,setCategorry}) =>{
    return(
        <>
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="shortcut-links">
                <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={()=>setCategorry(0)}>
                     <img src={home}/><p>Home</p>
                </div>
                <div className={`side-link ${category === 20 ? "active" : ""}`} onClick={()=>setCategorry(20)}>
                     <img src={game_icon}/><p>Gaming</p>

                </div>
                <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={()=>setCategorry(2)}>
                     <img src={automobiles}/><p>Automobiles</p>

                </div>
                <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={()=>setCategorry(17)}>
                     <img src={sports}/><p>Sports</p>

                </div>
                <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={()=>setCategorry(24)}>
                     <img src={entertainment}/><p>Entertainment</p>

                </div>
                <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={()=>setCategorry(28)}>
                     <img src={tech}/><p>Technology</p>

                </div>
                <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={()=>setCategorry(10)}>
                     <img src={music}/><p>Music</p>

                </div>
                <div className={`side-link ${category ===22 ? "active" : ""}`} onClick={()=>setCategorry(22)}>
                     <img src={blogs}/><p>Blogs</p>

                </div>
                <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={()=>setCategorry(25)}>
                     <img src={news}/><p>News</p>
                </div>
                <hr/>
            </div>
            <div className="subscribe-list">
                <h3>Subscribed</h3>
                <div className="side-link">
                    <img src={jack}/><p>PewDpie</p>
                </div>
                <div className="side-link">
                    <img src={simon}/><p>Mrbeast</p>
                </div>
                <div className="side-link">
                    <img src={tom}/><p>Justin bieber</p>
                </div>
                <div className="side-link">
                    <img src={megan}/><p>5-Minutes Crafts</p>
                </div>
                <div className="side-link">
                    <img src={cameron}/><p>Nas Daily</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar;