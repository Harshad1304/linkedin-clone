import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

// import { auth } from './fireBase'; // Import auth from firebase.js

// Initialize auth
const auth = getAuth();

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoUrl:userAuth.user.photoURL,
            }))
        }).catch(error => alert(error))
        // setName("");
        // setEmail("");
        // setPassword("");
    };

    const registerNow = () => {
        if(!name){
            return alert("please enter a full name")
        }

        createUserWithEmailAndPassword(auth,email, password)
        .then((userAuth)=>{
            console.log(userAuth)
            updateProfile(userAuth.user,{
                displayName: name,
                photoURL: profilePic || ''
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:name,
                    photoUrl:profilePic,
                }))
            })
        }).catch(error=>alert(error));
    };

    return (
        <div className='login'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fr0COR-AB8o4tvZFjQNhNyt0d9OHcRnSkQ&s" alt="" />
            <form>
                <input 
                    placeholder='Full name (required if registering)' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                />
                <input 
                    value={profilePic} 
                    onChange={(e) => setProfilePic(e.target.value)} 
                    placeholder='Profile picture url (Optional)' 
                    type="text" 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email' 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder='Password' 
                />
                <button onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?</p>
            <span onClick={registerNow} className='login-register'>Register Now</span>
        </div>
    );
}

export default Login;
