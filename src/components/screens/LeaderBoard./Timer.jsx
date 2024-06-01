import Countdown from "react-countdown";

// Renderer callback with condition

const DateItem = ({ text, title }) => {
  return (
    <li>
      <h4> {text < 10 ? `0${text}` : text}</h4>
      <p>{title}</p>
    </li>
  );
};

const renderer = ({ days, hours, minutes, seconds }) => {
  // Render a countdown
  return (
    <ul
      className={`mt-6 flex justify-center items-center gap-2.5 *:rounded-lg *:bg-primary-timer-bg  *:w-[50px] *:h-[53px] *:flex *:items-center *:justify-center *:flex-col *:font-bold [&_h4]:text-light-text [&_h4]:text-base [&_p]:text-primary-timer-text [&_p]:text-11`}
    >
      <DateItem text={days} title="days" />
      <DateItem text={hours} title="hrs" />
      <DateItem text={minutes} title="mins" />
      <DateItem text={seconds} title="sec" />
    </ul>
  );
};

const LeaderBoardTimer = () => {
  return (
    <Countdown
      daysInHours={true}
      // date will be dynamically updated. now this is for just demo purposes
      date={Date.now() + 604800000}
      renderer={renderer}
    />
  );
};
export default LeaderBoardTimer;
