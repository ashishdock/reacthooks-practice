import React, { useRef } from 'react';

const UseRefRoute = () => {
  const inputRef = useRef();

  const onClick = () => {
    // always reference the currect value of the reference
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>UseRefRoute</h1>

      <br />

      <h2>Testing useRef</h2>
      <input ref={inputRef} type="text" placeholder="Ex..." />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default UseRefRoute;
