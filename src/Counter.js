import React, { useState, useEffect } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  let [ color, setColor ] = useState('');

  function handleClick() {
    setCount(count+1);
  }

  function handleColorChange() {
    setColor(

    )
  }

  useEffect(()=>{
    document.title = count
  });

  

  return (
    <React.Fragment>
      <button onClick={handleClick}>
        Click Me to Increase The Count...
      </button>
      <h1>{count}</h1>
      <button>Change Color</button>
      <p>{color}</p>
    </React.Fragment>
  );
}

export default Counter;
