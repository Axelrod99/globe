import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((difference % (60 * 1000)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-3 w-full nunito-sans">
      <div className="border-2 border-[#122538] rounded-[8px] h-[186px] w-full md:w-[163px] text-[#122538] flex flex-col justify-center items-center ">
        <span className="text-[58px] text-[#c7961a] ">
          {timeRemaining.days}
        </span>
        Days
      </div>
      <div className="border-2 border-[#122538] rounded-[8px] h-[186px] w-full md:w-[163px] text-[#122538] flex flex-col justify-center items-center ">
        <span className="text-[58px] text-[#c7961a] ">
          {timeRemaining.hours}
        </span>
        Hours
      </div>
      <div className="border-2 border-[#122538] rounded-[8px] h-[186px] w-full md:w-[163px] text-[#122538] flex flex-col justify-center items-center ">
        <span className="text-[58px] text-[#c7961a] ">
          {timeRemaining.minutes}
        </span>
        Minutes
      </div>
      <div className="border-2 border-[#122538] rounded-[8px] h-[186px] w-full md:w-[163px] text-[#122538] flex flex-col justify-center items-center ">
        <span className="text-[58px] text-[#c7961a] ">
          {timeRemaining.seconds}
        </span>
        Seconds
      </div>
    </div>
  );
};

export default Countdown;
