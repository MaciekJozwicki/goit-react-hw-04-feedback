import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import { useState } from 'react';

const App = () => {
  const [types, setTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  let [amount, setAmount] = useState(0);

  const incrementStats = type => {
    setAmount((amount = amount + 1));
    if (type === 'good') {
      setTypes({ ...types, good: types.good + 1 });
    }
    if (type === 'neutral') {
      setTypes({ ...types, neutral: types.neutral + 1 });
    }
    if (type === 'bad') {
      setTypes({ ...types, bad: types.bad + 1 });
    }
  };

  const positivePercentage = () => {
    if (amount === 0) {
      return 0;
    }
    const value = Math.round((types.good / amount) * 100);
    return value;
  };

  return (
    <div>
      <Feedback increment={incrementStats} />
      <Statistics
        types={types}
        total={amount}
        percentage={positivePercentage()}
      />
    </div>
  );
};
export default App;
