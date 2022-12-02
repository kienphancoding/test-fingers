import clsx from "clsx";
import style from "./Home.module.scss";
import { useState, useEffect, useRef } from "react";
import { contents } from "./Content";
import HomeStatic from "./HomeStatic";
import HomeForm from "./HomeForm";
import HomeContent from "./HomeContent";

const Home = () => {
  const lengthContent = 25;
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [indexContent, setIndexContent] = useState(0);
  const [play, setPlay] = useState(false);
  const [show, setShow] = useState(true);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [lengthCorrect, setLengthCorrect] = useState(0);
  const [lengthIncorrect, setLengthIncorrect] = useState(0);
  const [renderContent, setRenderContent] = useState(() => {
    let content = "";
    for (let i = 0; i < lengthContent; i++) {
      let randomNumber = Math.floor(Math.random() * (contents.length - 1));
      content += contents[randomNumber] + " ";
    }
    return content;
  });

  let timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      if (play) {
        setSeconds(seconds === 0 ? () => 60 : (prev) => prev - 1);
        if (seconds === 0) {
          setPlay(false);
          setShow(false);
          //luu vao sorage
          if (correct - incorrect >= 10 && incorrect < 10) {
            if (!localStorage.getItem("correct")) {
              localStorage.setItem("correct", JSON.stringify([correct]));
              localStorage.setItem("wrong", JSON.stringify([incorrect]));
              localStorage.setItem(
                "correctLength",
                JSON.stringify([lengthCorrect])
              );
              localStorage.setItem(
                "wrongLength",
                JSON.stringify([lengthIncorrect])
              );
            } else {
              localStorage.setItem(
                "correct",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("correct")),
                  correct,
                ])
              );
              localStorage.setItem(
                "wrong",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("wrong")),
                  incorrect,
                ])
              );
              localStorage.setItem(
                "correctLength",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("correctLength")),
                  lengthCorrect,
                ])
              );
              localStorage.setItem(
                "wrongLength",
                JSON.stringify([
                  ...JSON.parse(localStorage.getItem("wrongLength")),
                  lengthIncorrect,
                ])
              );
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timerId.current);
  }, [play, seconds]);

  const handleChange = (e) => {
    if (show) {
      setValue(e.target.value);
      setPlay(true);
    }
  };
  
  const handleSubmit = (e) => {
    if (e.key === " " && show) {
      //statics
      if (value.trim() === renderContent.split(" ")[indexContent]) {
        setCorrect((prev) => prev + 1);
        setLengthCorrect((prev) => prev + value.trim().length);
      } else {
        setIncorrect((prev) => prev + 1);
        setLengthIncorrect((prev) => prev + value.trim().length);
      }

      //tang gia tri
      setIndexContent(
        indexContent === lengthContent - 1 ? () => 0 : (prev) => prev + 1
      );

      //clear input
      setValue("");

      //neu het tu se tai noi dung moi
      setRenderContent(
        indexContent + 1 === lengthContent
          ? () => {
              let content = "";
              for (let i = 0; i < lengthContent; i++) {
                let randomNumber = Math.floor(
                  Math.random() * (contents.length - 1)
                );
                content += contents[randomNumber] + " ";
              }
              return content;
            }
          : () => renderContent
      );
    }
  };

  const handleReset = () => {
    setShow(true);
    setIndexContent(0);
    setPlay(false);
    setValue("");
    setSeconds(60);
    setRenderContent(() => {
      let content = "";
      for (let i = 0; i < lengthContent; i++) {
        let randomNumber = Math.floor(Math.random() * (contents.length - 1));
        content += contents[randomNumber] + " ";
      }
      return content;
    });
    setCorrect(0);
    setIncorrect(0);
    setLengthCorrect(0);
    setLengthIncorrect(0);
  };

  return (
    <div className={clsx(style.wrapper)}>
      <HomeContent
        show={show}
        indexContent={indexContent}
        renderContent={renderContent}
      />

      <HomeForm
        value={value}
        seconds={seconds}
        handleChange={handleChange}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />

      <HomeStatic
        correct={correct}
        incorrect={incorrect}
        lengthCorrect={lengthCorrect}
        lengthIncorrect={lengthIncorrect}
      />
    </div>
  );
};

export default Home;
