import React, { useState } from 'react';
import {Avatar} from '@material-ui/core';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';


function MessageSander() {

    const [input, setInput] =  useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // some clever database stuff


        setInput("");
        setImageUrl("");

    }  


    return (
        <div className="messageSender" >
            <div className="messageSender__top">
                <Avatar/>
                <form action="">
                    <input type="text"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
                       className="messageSender__input"
                       placeholder={'Whats on your mind?'}
                    />
                    <input 
                        value={imageUrl}
                         onChange={(e) => setImageUrl(e.target.imageUrl) }
                        placeholder="image URL (Optional)"
                        
                    />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden Submit
                    </button>
                </form>

            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color:"red" }}  />
                    <h3>Live Video</h3>

                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon  style={{ color:"green" }}  />
                    <h3>Photo/Video</h3>

                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon  style={{ color:"orange" }}  />
                    <h3>Feeling/Activity</h3>

                </div>

            </div>
            
        </div>
    )
}

export default MessageSander;
