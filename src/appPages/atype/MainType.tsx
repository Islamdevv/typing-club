import React, { useState, useRef } from "react";
// import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";
import Timer from "./Timer";
import Header from "../site/components/layout/header/Header";
import scss from "./MainType.module.scss";

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "honda",
  "Figure",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "orange",
  "papaya",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "honda",
  "vanilla",
  "watermelon",
  "type",
  "hello",
  "zucchini",
  "group",
  "time",
  "off",
  "motion",
  "motionweb",
  "set",
  "open",
  "person",
  "public",
  "car",
  "mercedes",
  "toyota",
  "home",
  "programming",
  "python",
  "javascript",
  "laptop",
  "another",
  "during",
  "never",
  "plan",
  "same",
  "academy",
  "motocycle",
  "auth",
  "redux",
  "mongodb",
  "note",
  "without",
  "because",
  "much",
  "from",
  "never",
  "develop",
  "problem",
  "link",
  "telegram",
  "which",
  "system",
  "developer",
  "props",
  "react",
  "school",
  "work",
  "worker",
  "bathroom",
  "cyber",
  "room",
  "internet",
  "computer",
  "program",
  "algorithm",
  "database",
  "api",
  "graphql",
  "http",
  "https",
  "json",
  "mongodb",
  "docker",
  "kubernetes",
  "container",
  "cloud",
  "aws",
  "azure",
  "google",
  "microsoft",
  "github",
  "gitlab",
  "travis",
  "ci",
  "cd",
  "code",
  "test",
  "testing",
  "integration",
  "testing",
  "hi",
  "hello",
  "world",
  "hello",
  "how",
  "are",
  "you",
  "hello",
  "world",
];

const generateText = (length: number): string => {
  let text = "";
  for (let i = 0; i < length; i++) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    text += randomWord + " ";
  }
  return text.trim();
};

const MainType: React.FC = () => {
  const [text,] = useState(generateText(80));
  const [isActive, setIsActive] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [inputEnabled, setInputEnabled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // const handleUpdateText = () => {
  //   setText(generateText(80));
  // };

  // Начать тест
  const handleStart = () => {
    setIsActive(true);
    setInputEnabled(true);
    setCorrectWords(0);
  };

  const handleRestart = () => {
    window.location.reload(); 
  };

  const handleComplete = (correctWords: number) => {
    setIsActive(false);
    setInputEnabled(false);
    setCorrectWords(correctWords);
  };

  const handleTimeUp = () => {
    if (inputRef.current) {
      const inputWords = inputRef.current.value;
      const wordCount = inputWords.split(" ").length;
      handleComplete(wordCount);
    }
  };

  return (
    <div className="MainType">
      <Header />
      <div className="container_for_type">
        <div className={scss.main_type}>
          <h1>Words</h1>
          <TextInput
            text={text}
            onComplete={handleComplete}
            inputEnabled={inputEnabled}
            inputRef={inputRef}
          />
          <Timer isActive={isActive} onTimeUp={handleTimeUp} />
          {!isActive && (
            <>
              <button
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "blueviolet",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Audiowide",
                  cursor: "pointer",
                  margin: "10px 0",
                }}
                onClick={handleStart}
              >
                Start
              </button>
              <button
                style={{
                  width: "150px",
                  height: "40px",
                  backgroundColor: "red",
                  border: "none",
                  color: "white",
                  fontSize: "18px",
                  fontFamily: "Audiowide",
                  cursor: "pointer",
                  margin: "10px 0",
                }}
                onClick={handleRestart}
              >
                Restart
              </button>
            </>
          )}
          <p
            style={{
              color: "white",
              fontFamily: "DM mono",
              fontSize: "25px",
            }}
          >
            Correct words: {correctWords}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainType;
