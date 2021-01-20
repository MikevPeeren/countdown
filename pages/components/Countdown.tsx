// React
import { useState, useEffect } from 'react';

// CSS
import styles from './Countdown.scss';

// Constants
import { DAYS, HOURS, MINUTES, SECONDS } from '../../constants/general';

const Countdown = () => {
  const [retirementDate, setRetirementDate] = useState(new Date(2021, 7, 27).getTime());
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get today's date
      const today = new Date().getTime();

      // Get the difference
      const diff = retirementDate - today;

      // Calculate
      setDaysLeft(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHoursLeft(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutesLeft(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSecondsLeft(Math.floor((diff % (1000 * 60)) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdown}>
      <div className={styles.countdown__days}>
        <div className={styles.countdown__numbers}>{daysLeft}</div>
        {DAYS}
      </div>
      <div className={styles.countdown__hours}>
        <div className={styles.countdown__numbers}>{hoursLeft}</div>
        {HOURS}
      </div>
      <div className={styles.countdown__minutes}>
        <div className={styles.countdown__numbers}>{minutesLeft}</div>
        {MINUTES}
      </div>
      <div className={styles.countdown__seconds}>
        <div className={styles.countdown__numbers}>{secondsLeft}</div>
        {SECONDS}
      </div>
    </div>
  );
};

export default Countdown;
