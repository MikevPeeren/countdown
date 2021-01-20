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

      <footer></footer>
    </div>
  );
};
export default Home;
