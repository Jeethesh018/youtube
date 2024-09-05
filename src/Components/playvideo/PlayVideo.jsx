import "./PlayVideo.css"
import video from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"
import { useEffect, useState } from "react"
import { API_KEY } from "../../data"
import { valueConvertor } from "../../data"
import moment from "moment"
import { useParams } from "react-router-dom"

const PlayVideo = () =>{

    const {videoId} = useParams();


    const [apiData,setApiData] = useState(null)
    const [channelData,setChannelData] = useState(null)
     const [commentData,setCommentData] = useState([])

    

    const fetchVideoData = async () =>{
            //fetching videos data
            const video_details = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
           let response = await fetch(video_details)
           let data = await response.json(); 
           setApiData(data?.items[0])
    }

    const fetchChannelData = async () =>{
        //channel data
        const channel_details = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY}`
        const response = await fetch(channel_details)
        const data = await response.json();
        setChannelData(data?.items[0])



        //comment data
        const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        const res = await fetch(comment_url)
        const commentDta = await res.json();
        setCommentData(commentDta?.items)

    }




    useEffect(()=>{
     fetchVideoData();
    },[videoId])

    useEffect(()=>{
      fetchChannelData();
    },[apiData])

    return(
<div className="play-video">
    {/* <video src={video} controls autoPlay muted /> */}
    <iframe width="695" height="391" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Power Star Pawan Kalyan Birthday Special - Sridevi Drama Company | Aadi, Ramprasad, Rashmi | ETV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <h3>{apiData?.snippet?.title}</h3>
    <div className="play-video-info">
        <p>{valueConvertor(apiData?.statistics?.viewCount)} &bull; {moment(apiData?.snippet?.publishedAt).fromNow()}</p>
        <div>
            <span>
                <img src={like} alt="" /> {valueConvertor(apiData?.statistics?.likeCount)}
            </span>
            <span>
                <img src={dislike} alt="" />
            </span>
            <span>
                <img src={share} alt="" /> Share
            </span>
            <span>
                <img src={save} alt="" /> Save
            </span>
        </div>
    </div>
    <hr/>
    <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url} />
        <div>
            <p>{apiData?.snippet?.channelTitle}</p>
            <span>{valueConvertor(channelData?.statistics?.subscriberCount)} subscribers</span>      
  </div>
  <button>Subscrie</button>
    </div>
    <div className="vid-description">
        <p>{apiData?.snippet?.description.slice(0,251)}</p>
       
        <hr/>
        <h4>{valueConvertor(apiData?.statistics?.commentCount)} comments</h4>
        {commentData?.map((comments,index)=>{
        return (
            <div key={index} className="comments">
            <img src={comments?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}/>
            <div>
                <h3>{comments?.snippet?.topLevelComment?.snippet?.authorDisplayName.replace("@","")}<span>1 day ago</span></h3>
                <p>{comments?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>{comments?.snippet?.topLevelComment?.snippet?.likeCount}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
            </div> 
        )
        })}
        
        
              </div>
    </div>
    )
}
 export default PlayVideo;