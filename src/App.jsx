import { useState } from "react";
import { Button } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        Wanna login? <a href="/signin"> Please SignIn</a>
      </p>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
