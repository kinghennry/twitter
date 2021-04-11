import React from "react"
import "../css/Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from '@material-ui/icons/Search';
const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input flex ai">   <SearchIcon className="widgets__searchIcon"/>
            <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1356850984048279552"}/>

                <TwitterTimelineEmbed sourceType="profile"
                    screenName="KingHeenry"
                    options={{height:400}}/>

                <TwitterShareButton
                    url={"https://google.com"}
                    options={{ text: "React is Amazing", via: "KingHeenry" }}
                    // npm install -g firebase-tools
                />

            </div>
        </div>
    )
}

export default Widgets
