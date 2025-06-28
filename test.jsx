import { createContext, useContext, useState } from "react";

// 1. Create a context

const CounterContext = createContext();

// 2. Create a parent component that provides the context
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((c) => c + 1);
  };
  const decrease = () => {
    setCount((c) => c - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// 3. Create a child component that consumes the context
function Count() {
  const { count } = useContext(CounterContext);

  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);

  return (
    <button onClick={increase}>
      {icon ? <span>{icon}</span> : <span>+</span>}
    </button>
  );
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);

  return (
    <button onClick={decrease}>
      {icon ? <span>{icon}</span> : <span>-</span>}
    </button>
  );
}

// 4. add the child components as properties to the parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
