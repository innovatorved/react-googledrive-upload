import React, { useState, useEffect } from "react";
import "./App.css";

import Upload from "./components/Upload";
import Loader from "./components/Loader";

function App() {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLIENT_SECRET = process.env.CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://www.googleapis.com/oauth2/v4/token", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
    })
      .then(async (res: any) => {
        res = await res.json();
        setToken(res.access_token);
      })
      .catch((err) => alert(err.message));
    // eslint-disable-next-line
  }, [1]);

  return (
    <div className="App">
      <nav>
        <h3>Google Drive Image Upload</h3>
      </nav>
      <header className="App-header">
        {loading === false ? (
          <Upload token={token} setLoading={setLoading} />
        ) : (
          <Loader />
        )}
      </header>
    </div>
  );
}

export default App;
