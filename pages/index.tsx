// Next
import Head from 'next/head';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import Countdown from './components/Countdown';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Countdown />
      </main>

      <footer>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a> */}
      </footer>
    </div>
  );
};
export default Home;
