import '../styles/global.css';
import TopBar from '../components/Top-Bar/Top-Bar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />;
    </>

  );

}
