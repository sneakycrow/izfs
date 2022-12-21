//import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
// import ImageUploader from './ImageUploader';
//import AuthPage from './AuthPage';
//import { getUser } from './services/login-utils';
import './App.css'

function App() {
//   const [count, setCount] = useState(0)

//   const [currentUser, setCurrentUser] = useState({});

//   useEffect(() => {
//     const user = getUser();
//    // setCurrentUser(user);
//   }, []);


// // Define a function to handle image uploads
// const handleImageUpload = (image: File) => {
//   // Do something with the uploaded image file, such as sending it to a server or storing it in a database
// };

  return (
    <div className="App">
      <div className='title-card'>
        <h1 className='project-title'>IZFS</h1>
        <h2 className='tagline'>a simple file sharing software</h2>
          <div className='makers-prime'>
            <h4 className='makers'>by </h4> 
            <h4 className='zakk'>ctrlsquid </h4> 
            <h4>and </h4> 
            <h4 className='eoaan'>IACheifetz </h4>
          </div>
        <button className='placeholder'>LOGIN</button>
      </div>
    </div>
  )
}

export default App
