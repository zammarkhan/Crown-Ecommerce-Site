import React from 'react';
import './App.css';
import Homepage from './component/homepage/homepage.component';
import Shop from './component/shop/shop';
import { Route } from 'react-router-dom';
import  Header from './component/header/header'
import SignInAndSignUp from './component/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromauth = null;

  componentDidMount (){
   this.unsubscribeFromauth= auth.onAuthStateChanged(async  userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);


          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
               id: snapShot.id,
               ...snapShot.data()
              }
            })
          });

        }
        else{
          this.setState({
            currentUser: userAuth
          })
        }
  
  }
    )
  }
  
  componentWillUnmount(){
    this.unsubscribeFromauth();
  }
  
  render() {
   return( 
    <div className="App">
     <Header currentUser= {this.state.currentUser}/>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={Shop}></Route>
      <Route path='/signin' component={SignInAndSignUp}></Route>
  
    </div>
  )}
}

export default App;
