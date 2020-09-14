import React from 'react'
import "./Login.css";
import {Button} from "@material-ui/core";
import { auth ,provider} from './firebase';
import {useStateValue} from "./StateProvider"
import {actionTypes} from "./reducer"
function Login() {
    const [{user},dispatch] =useStateValue();
    const signIn =() =>{
        auth
        .signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error) => alert(error.message));

    }
    return (
        <div className="login">
            <div className="login_container">
            <img
             src="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_1.png"
             alt=""
             />
             <div className="login_text">
                 <h1>sign in to Whatsapp</h1>

             </div>
             <Button type="submitt" onClick={signIn}>
                 sign in with Google
             </Button>
            </div>
            
        </div>
    )
}

export default Login
