import React from "react";
import "./styles/style.scss";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [equal, setEqual] = React.useState(false);

  const setValueAfterEqual = (text, isConstant) => {
    if (isConstant) {
      if (equal) {
        setEqual(false);
        setInputValue(text);
      } else {
        setInputValue(inputValue + text);
      }
    } else {
      if (equal) {
        console.log("**" + equal);
        setEqual(false);
        setInputValue("");
      } else {
        let inputText = inputValue.charAt(inputValue.length - 1);
        if (inputValue.length === 0) {
          setInputValue("");
        } else if (
          inputText === "+" ||
          inputText === "-" ||
          inputText === "*" ||
          inputText === "/" ||
          inputText === "%"
        ) {
          setInputValue(inputValue.slice(0, -1) + text);
        } else {
          setInputValue(inputValue + text);
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="title">Calculator</div>
      <div className="main">
        <div className="show-text">
          <p>{inputValue}</p>
        </div>
        <hr></hr>
        <div className="row">
          <div>
            <button
              className="button-medium"
              onClick={() => {
                setInputValue("", true);
              }}
            >
              AC
            </button>
          </div>
          <div>
            <button className="button-medium">+/-</button>
          </div>
          <div>
            <button
              className="button-medium"
              onClick={() => {
                setValueAfterEqual("%", false);
              }}
            >
              %
            </button>
          </div>
          <div>
            <button
              className="button-orange"
              onClick={() => {
                setValueAfterEqual("/", false);
              }}
            >
              ÷
            </button>
          </div>
        </div>
        <div className="row">
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("7", true);
              }}
            >
              7
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("8", true);
              }}
            >
              8
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("9", true);
              }}
            >
              9
            </button>
          </div>
          <div>
            <button
              className="button-orange"
              onClick={() => {
                setValueAfterEqual("*", false);
              }}
            >
              *
            </button>
          </div>
        </div>
        <div className="row">
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("4", true);
              }}
            >
              4
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("5", true);
              }}
            >
              5
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("6", true);
              }}
            >
              6
            </button>
          </div>
          <div>
            <button
              className="button-orange"
              onClick={() => {
                setValueAfterEqual("-", false);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("1", true);
              }}
            >
              1
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("2", true);
              }}
            >
              2
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                setValueAfterEqual("3", true);
              }}
            >
              3
            </button>
          </div>
          <div>
            <button
              className="button-orange"
              onClick={() => {
                setValueAfterEqual("+", false);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="row">
          <button
            onClick={() => {
              setValueAfterEqual("0", true);
            }}
            className="button-zero"
          >
            0
          </button>
          <button
            onClick={() => {
              setValueAfterEqual(".", true);
            }}
          >
            .
          </button>
          <button
            className="button-orange"
            onClick={() => {
              if (inputValue.length !== 0) {
                setInputValue(eval(inputValue).toString(), true);
                setEqual(true);
              }
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
