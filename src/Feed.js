import React from 'react';
import  StoryReel from './StoryReel';
import "./Feed.css"; 
import MessageSander from './MessageSander';
import Post from './Post'



function Feed() {
    return (
        <div className="feed" >
            <StoryReel/>
            <MessageSander/>

           <Post
             profilePic='https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/14632840_1185580928183477_4789432004504720726_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=N4j8ygGCkkwAX_s_99f&_nc_ht=scontent-jnb1-1.xx&oh=c6b5cb55304c8f9e7f4eab285a11cd91&oe=60F329CF'
             message='wow this works'
             timestamp='this is a timestamp'
             username='Tawanda Nhare '
             image= 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/14632840_1185580928183477_4789432004504720726_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=N4j8ygGCkkwAX_s_99f&_nc_ht=scontent-jnb1-1.xx&oh=c6b5cb55304c8f9e7f4eab285a11cd91&oe=60F329CF'
           />
        </div>
    )
}

export default Feed;
