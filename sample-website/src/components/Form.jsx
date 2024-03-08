import PropTypes from "prop-types";
import { useState } from "react";

const Form = () => {
  const [word, setWord] = useState("type something");
  const [quantity, setQuantity] = useState();

  function handleWordChange(e) {
    setWord(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  return (
    <div className="max-w-sm mx-auto">
      <input
        value={word}
        onChange={handleWordChange}
        className="mt-4 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
      />
      <p className="mt-2 text-blue-700"> Text: {word} </p>

      <input
        value={quantity}
        onChange={handleQuantityChange}
        type="number"
        className="mt-4 border border-black"
      />
      <p className="mt-2 text-blue-700">Quantity: {quantity}</p>
    </div>
  );
};

Form.propTypes = {
  word: PropTypes.string,
  setWord: PropTypes.func,
};
export default Form;
