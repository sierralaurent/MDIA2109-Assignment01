import "./carousel.module.css"
import { useEffect, useState } from "react";
import img1 from 'public/carousel-images/0.jpg'
import img2 from './carousel-images/1.jpg'
import img3 from './carousel-images/2.jpg'

function App() {
    const [index, setIndex] = useState(0);
  
    const mod = (n, m) => {
      let result = n % m;
  
      // Return a positive value
      return result >= 0 ? result : result + m;
    };
  
    const cards = [
      {
        id: "1",
        image: img1,
      },
      {
        id: "2",
        image: img2,
      },
      {
        id: "3",
        image: img3,
      },
    ];
  
    useEffect(() => {
      setTimeout(() => {
        setIndex((index + 1) % cards.length);
        console.log(index);
      }, 3000);
    }, [index]);
  
    return (
      <div className="App">
        <div className="carousel">
          {cards.map((item, i) => {
            const indexLeft = mod(index - 1, cards.length);
            const indexRight = mod(index + 1, cards.length);
  
            let className = "card";
  
            if (i === index) {
              className = "card card--active";
            } else if (i === indexRight) {
              className = "card card--right";
            } else if (i === indexLeft) {
              className = "card card--left";
            } else className = "card";
  
            return (
              <img
                key={item.id}
                className={className}
                src={item.image}
                alt="Comic"
              ></img>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default App;