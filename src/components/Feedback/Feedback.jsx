const Feedback = ({ increment }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={() => increment('good')}>
        Good
      </button>
      <button type="button" onClick={() => increment('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => increment('bad')}>
        Bad
      </button>
    </div>
  );
};

export default Feedback;
