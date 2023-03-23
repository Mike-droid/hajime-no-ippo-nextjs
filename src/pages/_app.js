import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);


  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="loading-bar"></div>
        </div>
      ) : null}
      <Component {...pageProps} />
      <style jsx global>{`
        .loading {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #111111;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loading-bar {
          width: 50px;
          height: 4px;
          background-color: #2196f3;
          animation: loading-bar 2s infinite;
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </>
  );
}
