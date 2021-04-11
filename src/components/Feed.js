import React, {useState,useEffect} from "react"
import "../css/Feed.css"
import Tweetbox from './Tweetbox'
import Post from './Post'
import db from "../firebase"
import { BiHomeCircle, BiSearch } from "react-icons/bi"
import { IoNotificationsOutline } from "react-icons/io5"
import {FiMail} from "react-icons/fi"
import FlipMove from "react-flip-move"
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc=>doc.data()))
       ))
    }, [])
    return (
        <div className="feed">
            <div className="feed__links">
            <a href="">
            <BiHomeCircle className="active"/>                 
            </a>
            <a href="">
            <BiSearch/>                 
            </a>
            <a href="">
                    <IoNotificationsOutline />
            </a>        
                <a href="">
                <FiMail/>                 
                </a>
            </div>
            <div className="feed__header">
            <h2>Home</h2>
            </div>
             <Tweetbox />
            <FlipMove> 
            {posts.map((post) => {
                return (
                    <>
                <Post
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />
                    </>
                )
                
            })}    
            </FlipMove>
             
        </div>
    )
}

export default Feed
