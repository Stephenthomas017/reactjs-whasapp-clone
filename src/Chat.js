import React,{useState,useEffect} from 'react'
import "./Chat.css"
import {Avatar ,IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useParams } from "react-router-dom";
import db from './firebase';

function Chat() {

    const[seed,setSeed] = useState();
    const [input,setInput] =useState();
    const {roomId} =useParams();
    const[roomName,setRoomName] =useState("");
    const[messages,setMessages] =useState();

    console.log(roomId);

    useEffect(() =>{
        if(roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot(snapshot=>
                setRoomName(snapshot.data().name));
            db.collection("rooms").doc(roomId).collection("messages")
            .orderBy('timestamp','asc').onSnapshot(snapshot=>
            (
                setMessages(snapshot.docs.map(doc=>
                    doc.data()))
            ))
            }
        },[roomId]);

        
    useEffect( ()=> {
        setSeed(Math.floor(Math.random() *5000));
    },[])
    
    const sendMessage=(e)=>{
        e.preventDefault();
        console.log("you typed >>" ,input)
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat_headerinfo">
                    <h2>{roomName} </h2>
                    <p>last seen at...</p>

                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>

            <div className="chat_body">
               
                
                <p className={`chat_message ${true && "chat_receiver"}`}>

                <span className="chat_name">
                    stephen
                </span>
                hey
                <span className="chat_timestamp">
                    3.25pm
                </span>
                 </p>
                                  
               
            
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input
                     value={input}
                      onChange={(e) =>setInput(e.traget.value)}
                       placeholder="type a messsage" 
                       type="text"/>
                    <button onClick={sendMessage} type="submit"> Send a Message</button>
                </form>
                <MicIcon/>

            </div>
        </div>
    )
}

export default Chat
