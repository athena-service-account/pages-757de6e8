import React from 'react';

export default function SeedCard({ seed }) {
  return (
    <div>
      <h3>{seed.name}</h3>
      <p>{seed.description}</p>
      <img src={seed.image} alt={seed.name} />
    </div>
  );
}