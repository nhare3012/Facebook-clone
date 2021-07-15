import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar" >
           
           <SidebarRow src='https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/14632840_1185580928183477_4789432004504720726_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=N4j8ygGCkkwAX_s_99f&_nc_ht=scontent-jnb1-1.xx&oh=c6b5cb55304c8f9e7f4eab285a11cd91&oe=60F329CF '  title='Tawanda Nhare'/>
           <SidebarRow  Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
           <SidebarRow  Icon={EmojiFlagsIcon} title='Pages'  />
           <SidebarRow  Icon={PeopleIcon} title='Friends' />
           <SidebarRow  Icon ={ChatIcon} title='Messenger' />
           <SidebarRow  Icon={StorefrontIcon} title='Marketplace' />
           <SidebarRow  Icon={VideoLibraryIcon } title='Videos' />
           <SidebarRow  Icon={ExpandMoreOutlinedIcon} title='Marketplace' />
            
        </div>
    )
}

export default Sidebar;
