import Head from 'next/head';
import BalanceDisplay from '../components/BalanceDisplay';
import SeedLibrary from '../components/SeedLibrary';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SeedChange</title>
      </Head>
      <h1>SeedChange</h1>
      <p>SeedChange is a frontend-only web application designed to engage users in sustainability and gardening by converting their residual balance into plantable seeds.</p>
      <BalanceDisplay />
      <SeedLibrary />
    </div>
  );
}