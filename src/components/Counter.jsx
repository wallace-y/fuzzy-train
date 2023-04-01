import React, {useState} from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div>
          <p>Current count: {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Increase Count By 1
          </button>
          <button onClick={() => count < 1 ? setCount(count):setCount(count - 1)}>
            Decrease Count By 1
          </button>
          <button onClick={() => setCount(count - count)}>
            Reset
          </button>
        </div>
      );

}

export default Counter;
