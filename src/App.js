import "./styles.css";
import badLuck from "./assets/bad-luck.png";
import thumbsUp from "./assets/thumbs-up.png";

window.onload = (event) => {
  formSubmission();
};

export default function App() {
  return (
    <div className="App">
      <div id="content">
        <div className="formContainer">
          <h1>What's your lucky number?</h1>
          <input
            type="number"
            id="num_in"
            placeholder="Make your choice..."
          ></input>
          <button type="button" className="submitBtn" onClick={formSubmission}>
            Submit
          </button>
        </div>
      </div>
      <div id="popupOverlay">
        <div id="popup">
          <p id="result"></p>
          <button className="tryAgainBtn" onClick={closePopupWindow}>
            Try again!
          </button>
        </div>
      </div>
    </div>
  );
}

function formSubmission() {
  let inputValue = document.getElementById("num_in").value;
  let textMessage;
  if (inputValue === "") {
    document.getElementById("num_in").innerHTML = "";
  } else if (inputValue === "13") {
    textMessage =
      `<img
          className="badLuck"
          src=${badLuck}
          alt="Friday the 13th"
          width="40"
        />
      ` + " Friday the 13th! Not a lucky number, at all!";
    showPopupWindow(textMessage);
    document.getElementById("num_in").value = null;
  } else {
    textMessage = `<div className="endMessage">
    <img className="thumbsUp" src=${thumbsUp} alt="thumbs up" width="40" />
    <h2>You've successfully submitted number ${inputValue}, thank you!</h2>
  </div>`;
    showPopupWindow(textMessage);
    document.getElementById("num_in").value = null;
  }
}

function showPopupWindow(message) {
  document.getElementById("popupOverlay").style.display = "block";
  document.getElementById("result").innerHTML = message;
}

function closePopupWindow() {
  document.getElementById("popupOverlay").style.display = "none";
}
