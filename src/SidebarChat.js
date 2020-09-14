import React, {useState,useEffect} from 'react'
import {Avatar } from "@material-ui/core";
import "./SidebarChat.css";
import db from './firebase';
import {Link } from "react-router-dom";
function SidebarChat({id,name,addNewChat}) {
    const[seed,setSeed] = useState();

    useEffect (()=>{
        setSeed(Math.floor(Math.random() *5000))
    },[])

    const createChat=() =>{
        const roomName= prompt("please enter name for chat");
        
        if (roomName) {
            db.collection("rooms").add({
                name:roomName,
            })
        }

    };
    return  !addNewChat ?(
        
            <Link to ={`/rooms/${id}`}>
                <div className="sidebarchat">
            <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat_info">
                <h3>{name}</h3>
                <p>Last message</p>
            </div>
            
            </div>
    
            </Link>
           
            
        
    
       
    ):(
        <div onClick={createChat}
        className="sidebarchat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
