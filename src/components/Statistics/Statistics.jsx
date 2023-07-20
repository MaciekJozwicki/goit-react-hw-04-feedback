import Notification from 'components/Notification/Notification';

const Statistics = ({ types, total, percentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total === 0 ? (
        <Notification message={'There no statistics'} />
      ) : (
        <>
          <p>Good: {types.good}</p>
          <p>Neutral: {types.neutral}</p>
          <p>Bad: {types.bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {percentage}%</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
