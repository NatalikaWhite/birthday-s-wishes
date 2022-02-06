import './App.css';
import { useState } from "react";
import { data } from "./data";
import { dataLittle } from "./dataLittle";


function App() {

  const [gifts, setGifts] = useState (data);

  const removeGifts = (id) => {
  let newGifts = gifts.filter(element=>
    element.id !==id);
    setGifts(newGifts);
  }

  const [giftTwo, setGiftTwo] = useState(0);
  const {namik, imageTwok} = dataLittle[giftTwo];

  const beforButton = () => {
    setGiftTwo ((giftTwo => {
      giftTwo --;
      if (giftTwo < 0){
        return dataLittle.length -1;
      }
      return giftTwo;
    }))
  }

  const nextButton = () => {
    setGiftTwo ((giftTwo => {
      giftTwo ++;
      if (giftTwo > dataLittle.length -1) {
        giftTwo = 0;
      }
      return giftTwo;
    }))
  }


  return (
    <div>
      <div className="container">
      <h1>My wish list for Birthday - {gifts.length} gifts</h1>
      </div>
      <div className="container">
        {gifts.map(element => {
          const {id, giftik, image} = element;

          return (
            <div key={id}>
          <div className="container">
            <h2> {id} - {giftik} </h2>
            <img src={image} alt="gifts" width="300px" height="350px"/>
            <br/>
            <button onClick={() =>removeGifts(id)} >Подарок куплен</button>
            </div>
            </div>
            )
        }
        

          )}

        <div>
        <div className="container">
          <h2>{namik}</h2>
        </div>
        <div className="container">
          <img src={imageTwok} alt="gifts" width="300px" height="350px"/>
        </div>
        <br/>
        <div className="btn">
        <button onClick={beforButton}>Назад</button>
        <button onClick={nextButton}>Вперед</button>
        </div>
        </div>

<br/>
<br/>
          <div className="container btn">
          <button onClick={() => setGifts([])}>Удалить все</button>
          </div>
      </div>
      
      
    </div>
  );
}



export default App;
