import React, { useRef } from 'react';
import Button from './Button';

const UseImperativeHandle = () => {
  const buttonRef = useRef();
  return (
    <div>
      <br />
      <br />
      <br />
      <button onClick={() => buttonRef.current.alterToggle()}>
        Button From Parent
      </button>
      <br />
      <br />
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandle;
