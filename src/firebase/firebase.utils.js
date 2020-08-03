import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB670hkXU7hpgD3yGxXuL2dyqnGb8AMDBE",
    authDomain: "crown-db-398f3.firebaseapp.com",
    databaseURL: "https://crown-db-398f3.firebaseio.com",
    projectId: "crown-db-398f3",
    storageBucket: "crown-db-398f3.appspot.com",
    messagingSenderId: "428714292813",
    appId: "1:428714292813:web:167038f34692c242c98e04",
    measurementId: "G-D7W3X650H7"
  };


  export const createUserProfileDocument = async (userAuth,additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get(); 

      if(!snapShot.exists)
      {
          const {displayName,email} = userAuth;
          const createdAt = new Date();

          try{
              await userRef.set({
                  displayName,email,createdAt,...additionalData
              })

          }catch(error){
              console.log('error creating user ',error.message);

          }
      }
      return userRef;

  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters = ({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider); 

  export default firebase;