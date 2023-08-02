"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const targetDate = new Date("2023-08-14");

  const [countdownMessage, setCountdownMessage] = useState("");
  const [daysLeft, setDaysLeft] = useState(0);

  const calculateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      setCountdownMessage("Countdown is over!");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownMessage(`${hours}:${minutes}:${seconds}`);
    }
  };

  const getDaysLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      setCountdownMessage("Countdown is over!");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      setDaysLeft(days);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(calculateCountdown, 1000);
    const intervalId2 = setInterval(getDaysLeft, 1000);
    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  return (
    <div className="main">
      <h1>Countdown until 14/09.</h1>
      <h1>{`${daysLeft} days left`}</h1>
      <h1>{countdownMessage}</h1>
    </div>
  );
};

export default Countdown;
