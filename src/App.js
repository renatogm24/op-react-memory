import "./App.css";
import Card from "./Components/Card";
import React, { useState } from "react";
import Harry from "./Images/Harry.jpg";
import Ron from "./Images/Ron.jpg";
import Hermione from "./Images/Hermione.jpg";
import Albus from "./Images/Albus.png";
import Severus from "./Images/Severus.jpg";
import Ginny from "./Images/Ginny.jpg";
import Fread from "./Images/Fread.jpg";
import George from "./Images/George.jpg";
import Draco from "./Images/Draco.jpg";
import Tom from "./Images/Tom.jpg";
import Rubeus from "./Images/Rubeus.jpg";
import Dobby from "./Images/Dobby.png";

function App() {
  const OptionsArr = [
    { name: "Harry", id: "1", image: Harry },
    { name: "Ron", id: "2", image: Ron },
    { name: "Hermione", id: "3", image: Hermione },
    { name: "Albus", id: "4", image: Albus },
    { name: "Severus", id: "5", image: Severus },
    { name: "Ginny", id: "6", image: Ginny },
    { name: "Fread", id: "7", image: Fread },
    { name: "George", id: "8", image: George },
    { name: "Draco", id: "9", image: Draco },
    { name: "Tom", id: "10", image: Tom },
    { name: "Rubeus", id: "11", image: Rubeus },
    { name: "Dobby", id: "12", image: Dobby },
  ];
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
    setSortedOptions(shuffle(sortedOptions));
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const [sortedOptions, setSortedOptions] = useState(shuffle(OptionsArr));

  const resetGame = () => {
    setScore(0);
    setSortedOptions(shuffle(sortedOptions));
  };

  return (
    <div className="App">
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
      <div className="gridOptions">
        {sortedOptions.map((option) => {
          return (
            <Card
              key={option.id}
              image={option.image}
              name={option.name}
              incrementScore={incrementScore}
              resetGame={resetGame}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
