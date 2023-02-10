import React, { useLayoutEffect, useRef, useEffect } from 'react';

const UseLayoutEffect = () => {
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'HELLO!';
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      UseLayoutEffect
      <input
        ref={inputRef}
        value="PEDRO"
        style={{ width: 400, height: 100 }}
      ></input>
    </div>
  );
};

export default UseLayoutEffect;
