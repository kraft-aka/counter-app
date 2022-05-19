import React, { useState, useEffect } from "react";

let body = document.body.style.backgroundColor;
console.log(body);

function Counter() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("");

  function handleClick() {
    setCount(count + 1);
  }

  function handleChange() {
    setCount(count - 1);
  }

  function generateRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }

  useEffect(() => {
    document.title = count;
  });

  useEffect(()=> {
    document.body.style.backgroundColor = color;
  }, [color])

  useEffect(() => {
    setColor(generateRandomColor());
  }, [count]);

  return (
    <React.Fragment>
      <button onClick={handleClick}>
        Click Me to Increase The Count and Generate a HEX Color
      </button>
      <h1>{count}</h1>
      <h2>
        {" "}
        <strong>{color}</strong>{" "}
      </h2>
      <button onClick={handleChange}>
        Click this Button to descrease The Count
      </button>
    </React.Fragment>
  );
}

export default Counter;
