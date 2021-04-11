import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import {icons} from "../data"
import { Button } from "@material-ui/core"
import '../css/Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
           <TwitterIcon className="sidebar__twitterIcon" />
            {icons.map((icon) => {
                const {id,text,img,active}=icon
                return (
                    <div className={`sidebarOption flex ai ${active &&'sidebarOption--active'}`}  >
            
            <h3>{img}</h3>
            <h2 key={id}>{text}</h2>
            </div>
                )
            }
            )}
            <button className="sidebar__tweet">Tweet</button>
        </div>
    )
}

export default Sidebar
