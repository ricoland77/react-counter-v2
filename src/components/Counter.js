const Counter = ({ counter, setCounter }) => {
  return (
    <div className="all-counter">
      <div className="counter">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          –
        </button>
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>

      {/* bouton Reset */}
      <div>
        <button
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
