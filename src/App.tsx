import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";

import Upload from "./components/Upload";

function App() {
  const [url, setURL] = useState("");
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {token === "" ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Upload setURL={setURL} token={token} />
            <a href={url} target="_blank" rel="noreferrer" className="App-link">
              {url}
            </a>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
