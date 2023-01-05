import React from "react";
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";



function Sidebar(){
    return(
    <div className = "sidebar">

    {/*Grab all icons needed from twitter.*/}
        <TwitterIcon className="sidebar__twitterIcon" />

        <SidebarOption active Icon={PermIdentityIcon} text="Riley Fox" />
        <SidebarOption Icon={HomeIcon} text="Location: " />
        <h4>Hendersonville, TN</h4>
        <SidebarOption Icon={NotificationsNoneIcon} text="Phone:" />
        <h4>256-318-3092</h4>
        <SidebarOption Icon={MailOutlineIcon} text="Email: " />
        <h4>rileyfox134@gmail.com</h4>
        <SidebarOption Icon={ListAltIcon} text="LinkedIn:" />
        <h4>https://www.linkedin.com/in/rileyaf/</h4>
        <SidebarOption Icon={BookmarkBorderIcon} text="Education:" />
        <h4>Middle Tennessee State University</h4>
        <h4>B.B.A in Information Systems in</h4>
        <h4>2022</h4>
        <Button variant="outlined" className="sidebar__tweet" fullWidth >Hire Me!</Button>

    </div>

    );
}

export default Sidebar;