import "./Recomended.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { useEffect, useState } from "react"
import { API_KEY, valueConvertor } from "../../data"
import { Link, useParams } from "react-router-dom"

const Recomended = () =>{
    const {videoId,categoryId} = useParams();

    const [apiData,setApiData] = useState([]);

   const fetchData = async () => {
       const recomend_videos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
       let response = await fetch(recomend_videos)
       let data = await response.json();
       setApiData(data.items)
   }

   useEffect(()=>{
    fetchData();
   },[videoId])


    return(
        <div className="recomended">
            {apiData?.map((recomended,index)=>{
                return(
                    <Link to={`/video/${recomended?.snippet?.categoryId}/${recomended?.id}`} key={index} className="side-video-list">
                    <img src={recomended?.snippet?.thumbnails?.medium?.url}/>
                    <div className="vid-info">
                        <h4>{recomended?.snippet?.title}</h4>
                        <p>{recomended?.snippet?.channelTitle}</p>
                        <p>{valueConvertor(recomended?.statistics?.viewCount)} Views</p>
                    </div>
                </Link>
                )
            })}
          
            
        </div>
    )
}

export default Recomended;