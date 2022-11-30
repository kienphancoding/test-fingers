import clsx from "clsx";
import style from "./Trophy.module.scss";

const Trophy = () => {
  const highScore = [
    20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 110,
    120, 130, 140, 150, 160, 170, 180, 190, 200,
  ];
  const count = [5, 10, 15, 20, 25, 50, 75, 100, 150, 200, 300, 500];
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
