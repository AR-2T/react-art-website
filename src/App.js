import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [opposite, setOpposite] = useState(true);
  const [title, setTitle] = useState("Victory Royale");

  useEffect(()=> {
    console.log(title)
    // toast("Wow so easy!");
  }, [title])


  function changeTitle(){
    setOpposite(!opposite)
    if(opposite === true){
      setTitle("Victory Royale")
    }
    if(opposite === false){
      setTitle("Bortnite")
    }
  }

  return (
    <>
    <div className="App">
    <ToastContainer />
      <header className="App-header">
      <h1 className="title" onClick={()=> changeTitle()}>{title}</h1>
        
        { title === "Victory Royale" &&
        <img src="https://pngimg.com/uploads/fortnite/fortnite_PNG97.png" className="App-logo" alt="logo" />
        }
        

      </header>
      <Button variant="dark">Dark</Button>
    </div>
    </>
  );
}

export default App;
