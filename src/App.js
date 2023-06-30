import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quotes, setQuotes] = useState(null);

  const [randomColors, setRandomColors] = useState(
    Math.floor(Math.random() * 5)
  );
  const [randomQuotes, setRandomQuotes] = useState(null);

  useEffect(() => {
    axios
      .get("https://random-quote-back-end-production.up.railway.app/quote")
      .catch((err) => console.log(err))
      .then((res) => {
        setRandomQuotes(Math.floor(Math.random() * res.data.length));
        setQuotes(res.data);
      });
  }, []);

  const changeQuote = () => {
    setRandomColors(() => Math.floor(Math.random() * 5));
    setRandomQuotes(() => Math.floor(Math.random() * quotes.length));
  };

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
    <div className="d-flex flex-column align-items-center justify-content-center m-3 mt-5">
      {quotes && randomQuotes ? (
        <div className="quote-box bg-white text-center rounded-3 d-flex flex-column">
          <div className="d-flex p-3">
            <i className="bi bi-quote fs-1"></i>
            <div className="d-flex flex-column justify-content-center fs-5 p-3 mx-auto">
              <div>{quotes[randomQuotes].quote}</div>
            </div>
          </div>

          <p className="fs-6">{quotes[randomQuotes].author}</p>

          <div className="d-flex justify-content-around align-items-center p-3">
            <div>
              <a
                href={`https://api.whatsapp.com/send?text=%22${quotes[randomQuotes].quote}%22%0A${quotes[randomQuotes].author}`}
                target="_blank"
                title="Share this quote on WhatsApp!"
              >
                <i className="bi bi-whatsapp fs-1 px-3"></i>
              </a>

              <a
                className="change-color"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quotes[randomQuotes].quote}%22%0A${quotes[randomQuotes].author}`}
                target="_blank"
                title="Tweet this quote!"
              >
                <i className="bi bi-twitter fs-1 px-3"></i>
              </a>
            </div>

            <button
              className={buttonClasses[randomColors]}
              onClick={changeQuote}
            >
              Change Quote
            </button>
          </div>
        </div>
      ) : (
        <div className="spinner-border" role="status"></div>
      )}
      <footer className="text-white my-5">
        <a href="https://github.com/Cl84Dev" target="_blank">
          @Cl84Dev
        </a>
      </footer>
    </div>
  );
};

export default App;
