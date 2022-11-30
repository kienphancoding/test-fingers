import clsx from "clsx";
import { memo } from "react";
import style from "../Home.module.scss";

const HomeStatic = ({ correct, incorrect, lengthCorrect, lengthIncorrect }) => {
  const wpm = !!JSON.parse(localStorage.getItem("correct"))
    ? JSON.parse(localStorage.getItem("correct")).map((x, index) => {
        return x - JSON.parse(localStorage.getItem("wrong"))[index];
      })
    : [];

  const average = (array) => array.reduce((a, b) => a + b) / array.length;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className={clsx(style.statics)}>
        <h1 className={clsx(style.header)}>Results</h1>
        <h1 className={clsx(style.wpm)}>{correct - incorrect}WPM</h1>
        <div className={clsx(style.wrapperContent)}>
          <p style={{ color: "var(--primary)" }}>Correct words</p>
          <p style={{ color: "green" }}>{correct}</p>
        </div>
        <div className={clsx(style.wrapperContent)}>
          <p style={{ color: "var(--primary)" }}>Wrong words</p>
          <p style={{ color: "red" }}>{incorrect}</p>
        </div>
        <div className={clsx(style.wrapperContent)}>
          <p style={{ color: "var(--primary)" }}>Keystrokes</p>
          <div className={clsx(style.wrapperItem)}>
            <p style={{ color: "green" }}>{lengthCorrect}</p>
            <p style={{ color: "var(--primary)" }}>|</p>
            <p style={{ color: "red" }}>{lengthIncorrect}</p>
          </div>
        </div>
      </div>

      <div className={clsx(style.statics)}>
        <h1 className={clsx(style.header)}>Records</h1>
        {!!localStorage.getItem("correct") && (
          <p className={clsx(style.record)}>{Math.max(...wpm)}</p>
        )}
        <h1 className={clsx(style.header)}>Average</h1>
        {!!localStorage.getItem("correct") && (
          <p className={clsx(style.record)}>{Math.floor(average(wpm))}</p>
        )}
      </div>
    </div>
  );
};

export default memo(HomeStatic);
