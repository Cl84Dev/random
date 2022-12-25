import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App(props) {
    const quotes = [
        {
            quote: 'Quem não ama não conhece a Deus, porque Deus é amor.',
            author: '1 João 4:8'
        },
        {
            quote: 'Porque Deus amou tanto o mundo, que deu o seu Filho unigênito, para que todo aquele que nele exercer fé não seja destruído, mas tenha vida eterna.',
            author: 'João 3:16'
        },
        {
            quote: 'Portanto, todas as coisas que querem que os homens façam a vocês, façam também a eles. De fato, isso é o que a Lei e os Profetas querem dizer.',
            author: 'Mateus 7:12'
        },
        {
            quote: 'Quem pode encontrar uma esposa capaz? Seu valor é muito maior do que o de corais.',
            author: 'Provérbios 31:10'
        },
        {
            quote: 'Escutem! Estou em pé à porta e estou batendo. Se alguém ouvir a minha voz e abrir a porta, entrarei na sua casa e tomarei a ceia com ele, e ele comigo.',
            author: 'Apocalipse 3:20'
        },
    ]

    
    
    const [random, setRandom] = useState(Math.floor(Math.random() * 5))
    
    const changeQuote = () => {
        setRandom(
            () => Math.floor(Math.random() * 5)
        )
            
    }
        
    const twitter = `https://twitter.com/intent/tweet?hashtags=quotes&text=%22${quotes[random].quote}%22%0A${quotes[random].author}` 
    const whatsapp = `https://whatsapp/send?text=%22${quotes[random].quote}%22%0A${quotes[random].author}`

    const textColors = ['#0d6efd', '#6c757d', '#198754', '#dc3545', '#212529']

    const buttonClasses = ['btn btn-primary', 'btn btn-secondary', 'btn btn-success', 'btn btn-danger', 'btn btn-dark']
    
    document.body.style.backgroundColor = textColors[random]
    document.body.style.color = textColors[random]
    
    return (
      <div className="bg-white text-center rounded-3 d-flex flex-column" id="quote-box">
          <div className="d-flex p-3">
              <i className="bi bi-quote fs-1"></i><p className="fs-5 p-3" id='text'>{quotes[random].quote}</p>
          </div>

          <p className="fs-6" id="author">{quotes[random].author}</p>
          
          <div className="d-flex justify-content-around align-items-center p-3">
              <div>
                  <a href={whatsapp} target="_blank" title="Share this quote on WhatsApp!"><i class="bi bi-whatsapp fs-1 px-3"></i></a>

                  <a className="change-color" id="tweet-quote" href={twitter} target="_blank" title="Tweet this quote!"><i class="bi bi-twitter fs-1 px-3"></i></a>

              </div>

              <button className={buttonClasses[random]} id="new-quote" onClick={changeQuote}>Change Quote</button>

          </div>
  
      </div>  
    )
}

export default App
