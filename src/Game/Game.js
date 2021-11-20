import { useState } from "react";
import GameBody2 from "../components/GameBody2";
import GameBoyd1 from "../components/GameBoyd1";
import "./game.css";

const Game = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [isChosen, setIsChosen] = useState(false);
  const [winnerInfo, setWinnerInfo] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [score, setScore] = useState([0, 0]);

  const choices = ["Scissor", "Paper", "Rock"];

  const handleChoose = (e) => {
    let str = e.target.id;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    setUserChoice(str);
    setIsChosen(true);
    handleWinner(str, handleCompChoice());
    console.log(str);
  };

  const handleCompChoice = () => {
    let temp = Math.floor(Math.random() * 3);
    setCompChoice(choices[temp]);
    return choices[temp];
  };

  const handlePlayAgain = () => {
    setUserChoice(null);
    setIsChosen(false);
  };

  const handleWinner = (firstVal, secondVal) => {
    switch (true) {
      case firstVal === "Rock" && secondVal === "Rock":
        setWinnerInfo("Draw");
        break;
      case firstVal === "Rock" && secondVal === "Paper":
        setWinnerInfo("You Lost");
        score[1] = score[1] + 1;
        setScore(score);
        break;
      case firstVal === "Rock" && secondVal === "Scissor":
        setWinnerInfo("You Won");
        score[0] = score[0] + 1;
        setScore(score);
        break;

      case firstVal === "Paper" && secondVal === "Rock":
        setWinnerInfo("You Won");
        score[0] = score[0] + 1;
        setScore(score);
        break;
      case firstVal === "Paper" && secondVal === "Paper":
        setWinnerInfo("Draw");
        break;
      case firstVal === "Paper" && secondVal === "Scissor":
        setWinnerInfo("You Lost");
        score[1] = score[1] + 1;
        setScore(score);

        break;

      case firstVal === "Scissor" && secondVal === "Rock":
        setWinnerInfo("You Lost");
        score[1] = score[1] + 1;
        setScore(score);
        break;
      case firstVal === "Scissor" && secondVal === "Paper":
        setWinnerInfo("You Won");
        score[0] = score[0] + 1;
        setScore(score);
        break;
      case firstVal === "Scissor" && secondVal === "Scissor":
        setWinnerInfo("Draw");
        break;
      default:
        setWinnerInfo("Default");
        console.log("default");
    }
  };

  return (
    <div className="game-container">
      <div className="top-part">
        <div className="logo">
          <div>Rock</div>
          <div>Paper</div>
          <div>Scissor</div>
          <div>Lizard</div>
          <div>Spock</div>
        </div>

        <div className="score-container">
          <div className="score-name">Score</div>
          <div className="score">
            {score.map((val, idx) => {
              if (idx === 0) {
                return (
                  <>
                    <span key={idx}>{val}</span>
                    <span className="score-separator">:</span>
                  </>
                );
              } else {
                return <span key={idx}>{val}</span>;
              }
            })}
          </div>
        </div>
      </div>

      {isChosen ? (
        <GameBody2
          userChoice={userChoice}
          compChoice={compChoice}
          winnerInfo={winnerInfo}
          handlePlayAgain={handlePlayAgain}
        />
      ) : (
        <GameBoyd1 handleClick={handleChoose} />
      )}
    </div>
  );
};

export default Game;
