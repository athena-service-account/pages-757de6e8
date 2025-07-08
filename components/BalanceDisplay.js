import React, { useState } from 'react';

export default function BalanceDisplay() {
  const [balance, setBalance] = useState(10.0);
  const [seeds, setSeeds] = useState([
    { id: 1, name: 'Tomato', quantity: 2 },
  ]);

  const redeemSeed = () => {
    // Simulate redeeming a seed
    setBalance(balance - 1.0);
    setSeeds([...seeds, { id: 2, name: 'Basil', quantity: 1 }]);
  };

  return (
    <div>
      <h2>Balance: {balance}</h2>
      <button onClick={redeemSeed}>Redeem Seed</button>
      <h2>Seeds:</h2>
      <ul>
        {seeds.map((seed) => (
          <li key={seed.id}>{seed.name} x {seed.quantity}</li>
        ))}
      </ul>
    </div>
  );
}