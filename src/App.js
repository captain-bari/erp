import React,{useState} from 'react';
import './App.css';
import Login from './components/login';
import Dash from './components/dash';
import { MantineProvider } from '@mantine/core';
import {signin, signout, signup,useAuth} from './firebase'

function App() {

  const [showLogin, setLogin] = useState(false);
  const currentUser = useAuth();

  async function handleSignup() {
    alert("signup")
    try {
      await signup("test@gmail.com","barinder@123")
    } catch {
      alert("already siged")
    }
  }

  async function handleSignin() {
    alert("signin")
    try {
      await signin("test@gmail.com","barinder@123")
    } catch {
      alert("already siged")
    }
  }

  async function handleSignout() {
    alert("signout")
    try {
      await signout()
    } catch {
      alert("already out")
    }
  }

  return (
    <div className="App" >
       <MantineProvider theme={{ fontFamily: 'Open Sans' , colorScheme: 'light',radius:{sm:20}}}>
          {showLogin && <Login/>}
          {!showLogin && <Dash/>}
          <button onClick={()=>handleSignup()}>button</button>
          <button onClick={()=>handleSignout()}>out button</button>
          <button onClick={()=>handleSignin()}>in button</button>
          <p>current : {currentUser && currentUser.email}</p>
      </MantineProvider>
    </div>
  );
}

export default App;
