import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  

  return (
    <React.Fragment>
      <button onClick={handleClick}>
        Click Me to Increase The Count...
      </button>
      <h1>{count}</h1>
    </React.Fragment>
  );
}

export default Counter;
