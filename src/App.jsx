import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'
import Feed from './Feed'
import Login from './Login'
import Widgets from './Widgets'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'

import { getAuth } from 'firebase/auth';

function App() {

  const dispatch = useDispatch();
  const auth = getAuth();
  console.log(auth)
  
useEffect(()=>{
  auth.onAuthStateChanged(userAuth=> {
    if(userAuth) {
      //user is logged in
      dispatch(login({
        email:userAuth.email,
        uid:userAuth.uid,
        displayName:userAuth.displayName,
        photoUrl: userAuth.photoURL,
      }))
    }else{
      //user is logged out
      dispatch(logout()); 
    }
  })
},[])

  const user = useSelector(selectUser)

  return (
    <div className='app'>
      {/* Header */}
      <Header />

      {
        !user ? (<Login />): (
          
      <div className="app-body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
        )
      }
       

    </div>
  )
}

export default App