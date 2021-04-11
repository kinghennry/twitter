import React, { useState } from "react"
import img from "../images/IMG_8721.JPG"
import {Avatar,Button} from "@material-ui/core"
import "../css/Tweetbox.css"
import db from "../firebase"

const Tweetbox = () => {
    const [tweetMessage,setTweetMessage]=useState("")
    const [tweetImage, setTweetImage] = useState("")
     const sendTweet = (e) => {
         e.preventDefault()
         
         db.collection('posts').add({
             displayName: "Young Elon",
             username: "choopawontmiss",
             verified: true,
             text: tweetMessage,
             image:tweetImage,
             avatar:"https://images.pexels.com/photos/1068596/pexels-photo-1068596.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
         })

         setTweetMessage("")
         setTweetImage("")
    }

    return (
        <div className="tweetBox">
              <form className="flex fc">
                <div className="tweetBox__input flex">
                    <Avatar src={img}/>
                    <input value={tweetMessage} onChange={(e)=> setTweetMessage(e.target.value)}  type="text" placeholder="What's happening"/>
               </div>
            <input className="tweetBox__imageInput flex" value={tweetImage}  placeholder="Enter Image Link" onChange={(e)=> setTweetImage(e.target.value)}  /> 
        <button type="submit" className="tweetBox__tweetButton" onClick={sendTweet}>Tweet</button>   
            </form> 
        </div>
    )
}

export default Tweetbox
