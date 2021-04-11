import { BiHomeCircle } from "react-icons/bi"
import {FaHashtag} from "react-icons/fa"
import { IoNotifications } from 'react-icons/io5';
import {FiMail,FiBookmark} from "react-icons/fi"
import {ListAltIcon} from '@material-ui/icons/ListAlt';
import { BsFileText } from "react-icons/bs"
import {MdPermIdentity} from "react-icons/md"
import {CgMoreO} from "react-icons/cg"



export const icons = [
    {
        id: 1,
        text: "Home",  
        img:<BiHomeCircle/>,
        active: true
    },
    {
        id: 2,
        text: "Explore", 
        img:<FaHashtag/>
    },
    {
        id: 3,
        text: "Notifications",  
         img:<IoNotifications/>
    },
    {
        id: 4,
        text: "Messages",  
         img:<FiMail/>
    },
    {
        id: 5,
        text: "Bookmarks",  
         img:<FiBookmark/>
    },
    {
        id: 6,
        text: "Lists",  
         img:<BsFileText/>
    },
    {
        id: 7,
        text: "Profile",  
         img:<MdPermIdentity/>
    },
    {
        id: 8,
        text: "More",  
         img:<CgMoreO/>
    },




]