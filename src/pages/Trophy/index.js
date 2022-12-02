import clsx from "clsx";
import style from "./Trophy.module.scss";

const Trophy = () => {
  let highScore = [];
  for (let i = 10; i <= 200; i += 2) {
    highScore = [...highScore, i];
  }

  let count = [];
  for (let i = 5; i <= 500; i += 5) {
    count = [...count, i];
  }
  const wpm = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return x - JSON.parse(localStorage.getItem("wrong"))[index];
      })
    : [];
  const high = Math.max(...wpm);
  const newCount = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).length
    : 0;
  return (
    <div>
      <h1 className={clsx(style.title)}>High score</h1>
      <div className={clsx(style.list)}>
        {highScore.map((x, index) => {
          return (
            <div
              className={
                high >= x ? clsx(style.item, style.active) : clsx(style.item)
              }
              key={index}
            >
              {x}
            </div>
          );
        })}
      </div>
      <h1 className={clsx(style.title)}>Count</h1>
      <div className={clsx(style.list)}>
        {count.map((x, index) => {
          return (
            <div
              className={
                newCount >= x
                  ? clsx(style.item, style.active)
                  : clsx(style.item)
              }
              key={index}
            >
              {x}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trophy;
