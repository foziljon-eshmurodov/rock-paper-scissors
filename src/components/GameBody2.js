import Btn from "./Btn";

const GameBody2 = ({ userChoice, compChoice, winnerInfo, handlePlayAgain }) => {
  return (
    <div className="bottom-part">
      <Btn text={userChoice} chosenClass={"is-chosen"} />

      <div className="info">
        <div className="winner">{winnerInfo}</div>

        <div className="play-again">
          <button onClick={handlePlayAgain}>Play again?</button>
        </div>
      </div>

      <Btn text={compChoice} chosenClass={"is-chosen"} />
    </div>
  );
};

export default GameBody2;
