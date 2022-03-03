import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>George Grainger</title>
        <meta
          name="description"
          content="Personal website of George Grainger"
        />
      </Head>
      <Navbar></Navbar>
    </>
  );
};

export default Home;
