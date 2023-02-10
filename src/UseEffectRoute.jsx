import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectRoute = () => {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Page rendered');
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      console.log('API was called');
      setData(res.data[0].email);
      console.log(res.data[0].email);
    });
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>UseEffectRoute</h1>
      <h3>{data}</h3>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectRoute;
