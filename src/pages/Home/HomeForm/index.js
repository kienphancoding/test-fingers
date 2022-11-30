import clsx from "clsx";
import style from "../Home.module.scss";
import { useRef, useEffect, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const HomeForm = ({
  value,
  seconds,
  handleChange,
  handleReset,
  handleSubmit,
}) => {
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={clsx(style.form)}>
      <input
        ref={inputRef}
        className={clsx(style.input)}
        value={value}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        spellCheck="false"
      />
      <div className={clsx(style.time)}>{seconds}</div>
      <div className={clsx(style.reset)} onClick={handleReset}>
        <FontAwesomeIcon
          className={clsx(style.icon)}
          icon={faArrowRotateRight}
        />
      </div>
    </div>
  );
};

export default memo(HomeForm);
