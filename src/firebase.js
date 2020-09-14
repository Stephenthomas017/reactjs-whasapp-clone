
import firebase from "firebase"
const firebaseConfig = {
  
    apiKey: "AIzaSyAVO8JU7LdKKFO8_r4o_5blV9LDWHzPMg8",
    authDomain: "whatsapp-clone-dd6fd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-dd6fd.firebaseio.com",
    projectId: "whatsapp-clone-dd6fd",
    storageBucket: "whatsapp-clone-dd6fd.appspot.com",
    messagingSenderId: "300963461585",
    appId: "1:300963461585:web:f390d82fba0daa6e5c08f0"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;