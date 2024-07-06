import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const props = {name:'ashwin',age:25}
  return (
    <>
      <ListGroup props={props}/>
    </>
  );
}

export default App;
