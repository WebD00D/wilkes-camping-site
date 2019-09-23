import React, { useState } from 'react';

const MyHook = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(10);

  return (
    <div>
      <h1>{count}</h1>
      <h2>{otherCount}</h2>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
};

export default MyHook;
