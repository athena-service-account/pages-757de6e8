import React from 'react';
import SeedCard from './SeedCard';

const seeds = [
  { id: 1, name: 'Tomato', description: 'Easy to grow, fruitful', image: 'tomato.jpg' },
  { id: 2, name: 'Basil', description: 'Fast-growing, fragrant', image: 'basil.jpg' },
];

export default function SeedLibrary() {
  return (
    <div>
      <h2>Seed Library</h2>
      {seeds.map((seed) => (
        <SeedCard key={seed.id} seed={seed} />
      ))}
    </div>
  );
}