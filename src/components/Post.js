import React,{forwardRef} from 'react'
import "../css/Post.css"
import {Avatar} from "@material-ui/core"

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { BsChat } from 'react-icons/bs';
import { AiOutlineRetweet } from "react-icons/ai"
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { BsUpload} from "react-icons/bs"
import { GrFavorite } from "react-icons/gr"
import {VscVerified} from "react-icons/vsc"
const Post = forwardRef(({displayName,username,verified,text,image,avatar},ref) => {
    return (
         <div className="post ref={ref} flex">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3> {displayName} {""}<span className="post__headerSpecial">
                           { verified && <VscVerified className="post__badge" />}
                        @{username}
                        </span>
                            </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                    <div className="post__headerImage"> <img src={image} alt=""/></div>
                   
                    <div className="post__footer flex sb">
                        <BsChat className="post__icon" />
                        <AiOutlineRetweet className="post__icon"/>
                        <GrFavorite className="post__icon"/>
                        <BsUpload className="post__icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Post
