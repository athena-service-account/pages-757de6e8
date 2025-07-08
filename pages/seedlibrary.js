import Head from 'next/head';
import SeedCard from '../components/SeedCard';

const seeds = [
  { id: 1, name: 'Tomato', description: 'Easy to grow, fruitful', image: 'tomato.jpg' },
  { id: 2, name: 'Basil', description: 'Fast-growing, fragrant', image: 'basil.jpg' },
];

export default function SeedLibraryPage() {
  return (
    <div>
      <Head>
        <title>Seed Library</title>
      </Head>
      <h1>Seed Library</h1>
      {seeds.map((seed) => (
        <SeedCard key={seed.id} seed={seed} />
      ))}
    </div>
  );
}