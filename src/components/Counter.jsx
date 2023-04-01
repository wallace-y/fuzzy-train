import React, {useState} from 'react';

function Counter() {
    const [count,setCount] = useState(0);

    return (
        <div>
          <h1>Current count: {count}</h1>
          <div class="container">
                <div class="col m-3">
                    <button class="btn btn-primary" onClick={() => setCount(count + 1)}>
                      Increase Count By 1
                    </button>
                </div>
                <div class="col m-3">
                    <button class="btn btn-secondary" onClick={() => count < 1 ? setCount(count):setCount(count - 1)}>
                      Decrease Count By 1
                    </button>
                </div>
                <div class="col m-3">
                    <button class="btn btn-danger" onClick={() => setCount(count - count)}>
                      Reset
                    </button>
                </div>

            </div>
        </div>
      );

}

export default Counter;
