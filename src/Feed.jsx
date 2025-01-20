import React, { useEffect, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

// Import Firestore utilities
import { collection, onSnapshot, addDoc,  serverTimestamp, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import { db } from './fireBase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser)

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  

 useEffect(()=>{
  onSnapshot(query(collection(db, "posts"),orderBy("timestamp","desc")), (snapshot)=>{
    setPosts(snapshot.docs.map((doc)=>({
      id:doc.id,
      data:doc.data(),
    })))
  })
 },[])



  const sendPost = (e) => {
    e.preventDefault();
    const postsCollection = collection(db, "posts");

    addDoc(postsCollection,{
      name:user.displayName,
      description:user.email,
      message:input,
      photoUrl:user.photoUrl || " ",
      timestamp: serverTimestamp(),
    })

    setInput('')

  };

  const deleteHandler = (id)=>{
    const postsCollection = collection(db, "posts")
    // console.log(id)
    deleteDoc(doc(postsCollection, id));
  }

  return (
    <div className='feed'>
      <div className="feed-input-container">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>
        <div className="feed-input-options">
          <InputOption color="#70B5f9" Icon={ImageIcon} title='Photo' />
          <InputOption color="#E7A33E" Icon={VideoLibraryIcon} title='Video' />
          <InputOption color="#C0CBCD" Icon={EventNoteIcon} title='Event' />
          <InputOption color="#7FC15E" Icon={CalendarViewDayIcon} title='Write article' />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      {posts.map(({id,data:{name,description, message, photoUrl}}) => (
        <Post key={id} onClick={()=>deleteHandler(id)} name={name} description={description} message={message} photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
