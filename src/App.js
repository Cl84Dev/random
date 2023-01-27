import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quotes, setQuotes] = useState([
    {
      quote: "",
      author: "",
    },
  ]);

  const [randomColors, setRandomColors] = useState(
    Math.floor(Math.random() * 5)
  );
  const [randomQuotes, setRandomQuotes] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  useEffect(() => {
    axios
      .get("https://random-quote-back-end-production.up.railway.app/quote")
      .catch((err) => console.log(err))
      .then((res) => setQuotes(res.data));
  }, []);

  const changeQuote = () => {
    setRandomColors(() => Math.floor(Math.random() * 5));
    setRandomQuotes(() => Math.floor(Math.random() * quotes.length));
  };

  const twitter = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quotes[randomQuotes].quotation}%22%0A${quotes[randomQuotes].author}`;
  const whatsapp = `https://api.whatsapp.com/send?text=%22${quotes[randomQuotes].quotation}%22%0A${quotes[randomQuotes].author}`;

  const textColors = ["#0d6efd", "#6c757d", "#198754", "#dc3545", "#212529"];

  const buttonClasses = [
    "btn btn-primary",
    "btn btn-secondary",
    "btn btn-success",
    "btn btn-danger",
    "btn btn-dark",
  ];

  document.body.style.backgroundColor = textColors[randomColors];
  document.body.style.color = textColors[randomColors];

  return (
    <div className="d-flex justify-content-center m-3 mt-5">
      <div
        className="bg-white text-center rounded-3 d-flex flex-column"
        id="quote-box"
      >
        <div className="d-flex p-3">
          <i className="bi bi-quote fs-1"></i>
          <p className="fs-5 p-3" id="text">
            {quotes[randomQuotes].quotation}
          </p>
        </div>

        <p className="fs-6" id="author">
          {quotes[randomQuotes].author}
        </p>

        <div className="d-flex justify-content-around align-items-center p-3">
          <div>
            <a
              href={whatsapp}
              target="_blank"
              title="Share this quote on WhatsApp!"
            >
              <i className="bi bi-whatsapp fs-1 px-3"></i>
            </a>

            <a
              className="change-color"
              id="tweet-quote"
              href={twitter}
              target="_blank"
              title="Tweet this quote!"
            >
              <i className="bi bi-twitter fs-1 px-3"></i>
            </a>
          </div>

          <button
            className={buttonClasses[randomColors]}
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
