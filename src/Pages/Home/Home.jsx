import { useState } from "react";
import Feed from "../../Components/feed/feed";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.css"

const Home = ({sidebar})=>{


    const [category,setCategorry] = useState(0)


    return(
        <>
        <Sidebar sidebar={sidebar} category={category} setCategorry={setCategorry}/>
        <div className={`container ${sidebar? " " : "large-container"}`}>
            <Feed category={category} />
             </div>
        </>
    )

}
export default Home;