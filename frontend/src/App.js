import React, { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React + Flask</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
