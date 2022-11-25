import React, { useState } from 'react'
import './App.css';

import Upload from "./components/Upload"

function App() {

  const [url, setURL] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Upload setURL={setURL} />
        <a href={url} target="_blank" rel="noreferrer" className="App-link">{url}</a>
      </header>

    </div>
  );
}

export default App;
