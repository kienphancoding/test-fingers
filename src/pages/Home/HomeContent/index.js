import clsx from "clsx";
import { memo } from "react";
import style from "../Home.module.scss";

const HomeContent = ({ show, indexContent, renderContent }) => {
  return (
    show && (
      <div className={clsx(style.content)}>
        {renderContent.split(" ").map((x, index) => {
          return (
            <p
              key={index}
              style={
                index === indexContent
                  ? { backgroundColor: "var(--primary)", color: "white" }
                  : {}
              }
              className={clsx(style.text)}
            >
              {x}
            </p>
          );
        })}
      </div>
    )
  );
};

export default memo(HomeContent);
