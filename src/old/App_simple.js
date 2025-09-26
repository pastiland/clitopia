import './App.css'
import { Suspense, lazy, useState, useEffect } from "react"
import Loading from "./components/Loading"

const Home = lazy(() => import('./components/Home'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // Minimum loading time of 1 second
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 1000);

    // Check if page is fully loaded
    const handleLoad = () => {
      if (minTimeElapsed) {
        setIsLoading(false);
      }
    };

    // If page is already loaded, wait for minimum time
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [minTimeElapsed]);

  // Hide loading when both conditions are met
  useEffect(() => {
    if (minTimeElapsed && document.readyState === 'complete') {
      setIsLoading(false);
    }
  }, [minTimeElapsed]);


  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App