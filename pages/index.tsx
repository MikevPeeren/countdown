// Next
import Head from 'next/head';

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
        <div className="content">
          <Header></Header>
          <Countdown />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};
export default Home;
