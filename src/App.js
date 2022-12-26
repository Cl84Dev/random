import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import quotes from "./data/data";

const App = () => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 5));

  const changeQuote = () => {
    setRandom(() => Math.floor(Math.random() * 10));
  };

  const twitter = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quotes[random].quote}%22%0A${quotes[random].author}`;
  const whatsapp = `https://api.whatsapp.com/send?text=%22${quotes[random].quote}%22%0A${quotes[random].author}`;

  const textColors = [
    "#0d6efd",
    "#6c757d",
    "#198754",
    "#dc3545",
    "#212529",
    "#0d6efd",
    "#6c757d",
    "#198754",
    "#dc3545",
    "#212529",
  ];

  const buttonClasses = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
    "btn btn-dark",
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
    "btn btn-dark",
  ];

  document.body.style.backgroundColor = textColors[random];
  document.body.style.color = textColors[random];

  return (
    <div className="d-flex justify-content-center m-3 mt-5">
      <div
        className="bg-white text-center rounded-3 d-flex flex-column"
        id="quote-box"
      >
        <div className="d-flex p-3">
          <i className="bi bi-quote fs-1"></i>
          <p className="fs-5 p-3" id="text">
            {quotes[random].quote}
          </p>
        </div>

        <p className="fs-6" id="author">
          {quotes[random].author}
        </p>

        <div className="d-flex justify-content-around align-items-center p-3">
          <div>
            <a
              href={whatsapp}
              target="_blank"
              title="Share this quote on WhatsApp!"
            >
              <i class="bi bi-whatsapp fs-1 px-3"></i>
            </a>

            <a
              className="change-color"
              id="tweet-quote"
              href={twitter}
              target="_blank"
              title="Tweet this quote!"
            >
              <i class="bi bi-twitter fs-1 px-3"></i>
            </a>
          </div>

          <button
            className={buttonClasses[random]}
            id="new-quote"
            onClick={changeQuote}
          >
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
