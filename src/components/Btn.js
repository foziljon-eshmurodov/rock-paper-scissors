const Btn = ({ text, handleClick, chosenClass }) => {
  let id = text.toLowerCase();
  return (
    <div
      className={`symbol ${chosenClass}`}
      id={id}
      onClick={handleClick ? handleClick : null}
    >
      <div className={id} id={id}>
        {text}
      </div>
    </div>
  );
};

export default Btn;
