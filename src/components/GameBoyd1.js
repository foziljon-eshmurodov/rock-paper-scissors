import Btn from "./Btn";

const GameBoyd1 = ({ handleClick }) => {
  return (
    <div className="bottom-part">
      <Btn handleClick={handleClick} text="Scissor" />

      <Btn handleClick={handleClick} text="Paper" />

      <Btn handleClick={handleClick} text="Rock" />
    </div>
  );
};

export default GameBoyd1;
