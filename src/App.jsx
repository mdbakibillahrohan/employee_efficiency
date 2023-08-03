import { useState } from "react";

import MyRouter from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyRouter />
    </>
  );
}

export default App;
