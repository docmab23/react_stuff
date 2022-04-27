import logo from './logo.svg';
import './App.css';
import {db} from './firebase-config';
import {collection , getDocs , addDoc} from "firebase/firestore"
import React , {useState} from "react";
import {useEffect} from "react";
//const ref = firebaseConfig.firestore().collection("jobs");

//console.log(ref);
function App() {
  const [newname , setnewname] = useState("");
  const [jobs,setJobs] = useState([])
  const ref = collection(db,"people");
  console.log(ref);
  const createUser = async () => {
    await addDoc(ref,{name:newname});
    console.log(newname)
  }
  useEffect(()=>{
    const getjobs = async () => {
      const data = await getDocs(ref);
      setJobs(data.docs.map((doc) =>({...doc.data()})))
     };

     getjobs();
  },[]);
  return (
    <div className="App">
      <input placeholder='Name...' onChange={(event)=> {setnewname(event.target.value);}}/>
      <button onClick={createUser}>Add User</button>
      {jobs.map((user)=>{
        return (<div> <h1>Name: {user.name}</h1>
        </div>
        );
      })}
    </div>
  );
    }

export default App;
