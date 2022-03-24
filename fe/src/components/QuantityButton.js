import React, { useState } from "react";

export default function QuantityButton(props) {
  const [qty, setQty] = useState( props.quantity || 1 );
  localStorage.setItem('qty', qty);

  const handleIncrease = () => {
    setQty(qty + 1);
  }

  const handleDecrease = () => {
    setQty(qty - 1);
  }

  return (
    <div className='qty--wrap'>
      <input className='qty__btn minus' type='button' value='-' onClick={handleDecrease} disabled={qty === 1} />
      <input className='qty__input' type='number' min='1' max={props.product_amount} value={qty}
        onChange={(e) => e.target.value = qty}
      />
      <input className='qty__btn plus' type='button' value='+' onClick={handleIncrease} disabled={qty >= props.product_amount} />
    </div>
  );
}
