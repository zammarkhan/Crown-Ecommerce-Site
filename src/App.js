import React from 'react';
import './App.css';
import Homepage from './component/homepage/homepage.component';
import Shop from './component/shop/shop';
import CheckoutPage from './/component/checkout/checkout';
import { Route, Redirect } from 'react-router-dom';
import  Header from './component/header/header'
import SignInAndSignUp from './component/sign-in-and-sign-up/sign-in-and-sign-up'
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selector';
class App extends React.Component {
  unsubscribeFromauth = null;

  componentDidMount (){
   const {setCurrentUser} = this.props;
   this.unsubscribeFromauth= auth.onAuthStateChanged(async  userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);


          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
               id: snapShot.id,
               ...snapShot.data()
              }
            })
           });

        }
        else{
          setCurrentUser(userAuth)
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
     <Header 
     />
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={Shop}></Route>
      <Route exact path='/checkout' component={CheckoutPage}></Route>
      <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndSignUp/>)} ></Route>

    </div>
  )}
}
 const mapStateToProps = createStructuredSelector({
   currentUser : selectCurrentUser
 })
const mapDispatchToProps= dispatch =>({
        setCurrentUser : user => dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps) (App);
