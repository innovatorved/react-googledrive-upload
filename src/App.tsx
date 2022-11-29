import React, { useState , useEffect } from "react";
import "./App.css";

import Upload from "./components/Upload";

function App() {
  const CLIENT_ID = "607050940310-4eqo5v4m14ul6n05ur982d7epbi66v35.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REFRESH_TOKEN = "1//04KjQLhHOKEPQCgYIARAAGAQSNwF-L9IriqIyzOWY3xir-TIu810M7nJ-AhQ-gKTaDtZUbJfMVACShzZhN_XXD8zRhFKQxgR0OoA";

  const [token, setToken] = useState("");

  useEffect(()=>{
    fetch(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          "client_id": CLIENT_ID,
          "client_secret": CLIENT_SECRET,
          "refresh_token": REFRESH_TOKEN,
          "grant_type": "refresh_token"
        }),
      }
    ).then(async(res:any)=>{
      res = await res.json();
      setToken(res.access_token)
    })
    .catch(err => alert(err.message));
    // eslint-disable-next-line
  },[1])


  return (
    <div className="App">
      <header className="App-header">
        <Upload token={token}/> 
      </header>
    </div>
  );
}

export default App;
