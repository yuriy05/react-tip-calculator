import {useState} from "react";

function App() {
  const [price, setPrice] = useState(null);
  const [tip, setTip] = useState({yourTip: 5, friendTip: 5});

  const yourTip = tip.yourTip;
  const friendTip = tip.friendTip;

  return (
    <>
      <Bill onSetPrice={setPrice} />
      <SelectPercentage text="How did you like the service?" onSetTip={(value) => setTip({...tip, yourTip: value})} tip={yourTip}/>
      <SelectPercentage text="How did your friend like the service?" onSetTip={(value) => setTip({...tip, friendTip: value})} tip={friendTip}/>
      <Output price={price} yourTip={tip.yourTip} friendTip={tip.friendTip} />
    </>
  );
}

function Bill({onSetPrice}) {
  return (
    <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
      <p>How much was the bill?</p>
      <input type="number" onChange={(e) => onSetPrice(Number(e.target.value))} />
    </div>
  )
}

function SelectPercentage({text, onSetTip, tip}) {
  return (
    <div style={{display: 'flex', gap: 10, alignItems: 'center'}}>
    <p>{text}</p>
    <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
      <option value='0'>Disssatisfied (0%)</option>
      <option value='5'>It was okay (5%)</option>
      <option value='10'>It was good (10%)</option>
      <option value='20'>Absolutely Amazing (20%)</option>
    </select>
  </div>
  )
}

function Output({price, yourTip, friendTip}) {
  const tip = price * ((yourTip + friendTip) / 2 / 100);

  return (
    <div>
      {price > 0 && (<p>You pay ${price + tip}  (${price} + ${tip} tip)</p>)}
    </div>
  )
}

export default App;
