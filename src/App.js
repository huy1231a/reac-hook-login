import './App.css';
import Login from './Component/Login';
import React, {useEffect , useState} from "react";


function App() {
  const [username, setUsername] = useState({username:""});
  const [password, setPassword] = useState({password:""});
  return (
    <div className="App">
      {(userName.userName != "")?(
        <div>
          <h2>Welcom <span>{userName.userName}</span></h2>
        </div>
      ): (
        <Login/>
      )}
      
    </div>
  );
}

export default App;
