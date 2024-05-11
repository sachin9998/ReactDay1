const Counter = ({ count, setCount, handleIncrement, handleDecrement }) => {
  return (
    <div className="container">
      <p className="heading">Current Count: {count}</p>

      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
