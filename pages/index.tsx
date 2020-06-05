// Next
import Head from 'next/head';

// CSS
import './styles.global.scss';
import styles from './index.scss';

// Components
import Countdown from './components/Countdown';
import Header from './components/Header';

// Constants
import { TITLE } from '../constants/general';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.content}>
          <Header></Header>
          <Countdown />
        </div>
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
