import './App.css'
import { Suspense, lazy, useState, useEffect } from "react"
import Loading from "./components/Loading"
import Video from "./components/Video"
import SimpleHeader from "./components/SimpleHeader"
import SimpleFooter from "./components/SimpleFooter"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(true);
  const [showHeaderFooter, setShowHeaderFooter] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasTransitioned, setHasTransitioned] = useState(false);

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

  const handleVideoTransition = () => {
    setIsVideoFullscreen(false);
    setHasTransitioned(true);
    // Delay showing header/footer for smooth transition
    setTimeout(() => {
      setShowHeaderFooter(true);
      setIsHeaderVisible(true); // Show header when transitioning from fullscreen
      setLastScrollY(window.scrollY); // Set current scroll position
    }, 400);
  };

  const handleBackToFullscreen = () => {
    setShowHeaderFooter(false);
    setIsVideoFullscreen(true);
    setIsHeaderVisible(false);
    setHasTransitioned(false);
    setLastScrollY(0);
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle scroll up from VERY TOP to return to fullscreen
  useEffect(() => {
    console.log('Setting up scroll-to-fullscreen listeners. isVideoFullscreen:', isVideoFullscreen);

    if (isVideoFullscreen) {
      console.log('Skipping - video is already fullscreen');
      return;
    }

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const canScroll = documentHeight > windowHeight;

      console.log('SCROLL EVENT:', {
        'window.scrollY': window.scrollY,
        'window.pageYOffset': window.pageYOffset,
        'document.documentElement.scrollTop': document.documentElement.scrollTop,
        'computed scrollY': scrollY,
        isAtTop: scrollY <= 5,
        documentHeight,
        windowHeight,
        canScroll,
        shouldBeScrollable: documentHeight > windowHeight
      });
    };

    const handleWheel = (e) => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop; // More reliable way to get scroll position
      const isAtTop = scrollY <= 5; // Allow small tolerance for very top
      const isScrollingUp = e.deltaY < 0;

      console.log('WHEEL EVENT:', {
        'window.scrollY': window.scrollY,
        'window.pageYOffset': window.pageYOffset,
        'document.documentElement.scrollTop': document.documentElement.scrollTop,
        'computed scrollY': scrollY,
        deltaY: e.deltaY,
        isAtTop,
        isScrollingUp,
        shouldTrigger: isAtTop && isScrollingUp
      });

      // Only trigger if we're exactly at top AND scrolling up
      if (isAtTop && isScrollingUp) {
        console.log('🎬 TRIGGERING FULLSCREEN! Conditions met: at top + scrolling up');
        handleBackToFullscreen();
      } else {
        console.log('Not triggering because:', {
          reason: !isAtTop ? `not at top (scrollY=${scrollY})` : !isScrollingUp ? 'not scrolling up' : 'unknown'
        });
      }
    };

    console.log('Adding scroll and wheel listeners...');
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      console.log('Removing scroll-to-fullscreen listeners...');
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVideoFullscreen]);

  // Handle header visibility based on scroll direction (separate from fullscreen logic)
  useEffect(() => {
    if (isVideoFullscreen) return;

    // Only proceed if we have content showing (after transition)
    if (!hasTransitioned || !showHeaderFooter) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);

      // Minimum scroll threshold to prevent jitter
      if (scrollDifference > 8) {
        if (currentScrollY < lastScrollY) {
          // Scrolling UP anywhere - show header
          console.log('-> Scrolling UP: Showing header');
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling DOWN and past initial area - hide header
          console.log('-> Scrolling DOWN: Hiding header');
          setIsHeaderVisible(false);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVideoFullscreen, hasTransitioned, showHeaderFooter, lastScrollY]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <SimpleHeader
        isVisible={showHeaderFooter && isHeaderVisible}
        onNavigate={handleVideoTransition}
      />
      <main className={`main-content ${isVideoFullscreen ? 'fullscreen' : ''}`}>
        <Video
          isFullscreen={isVideoFullscreen}
          onTransition={handleVideoTransition}
        />
        {!isVideoFullscreen && (
          <div className="page-content">
            <section id="home" className="content-section">
              <h1>Welcome to Clitopia</h1>
              <p>9999 Non-Fungible Pussies into the metaverse!</p>
            </section>

            <section id="about" className="content-section">
              <h2>About the Collection</h2>
              <p>Discover the most unique and artistic NFT collection celebrating feminine empowerment and diversity in the digital realm.</p>
            </section>

            <section id="collection" className="content-section">
              <h2>The Collection</h2>
              <p>9999 uniquely generated digital artworks, each representing a different aspect of feminine power and beauty in the metaverse.</p>
            </section>

            <section id="roadmap" className="content-section">
              <h2>Roadmap</h2>
              <p>Our journey through the metaverse includes exclusive events, community building, and revolutionary digital experiences.</p>
            </section>

            <section id="community" className="content-section">
              <h2>Community</h2>
              <p>Join our vibrant community of collectors, artists, and visionaries building the future of digital art and empowerment.</p>
            </section>

            <section id="contact" className="content-section">
              <h2>Get in Touch</h2>
              <p>Connect with us across social platforms and be part of the Clitopia revolution.</p>
            </section>

            {/* Add extra content to ensure page is scrollable */}
            <section className="content-section">
              <h2>Extra Section 1</h2>
              <p>This is extra content to ensure the page is tall enough to scroll.</p>
            </section>

            <section className="content-section">
              <h2>Extra Section 2</h2>
              <p>More content to make sure we can scroll down the page.</p>
            </section>

            <section className="content-section">
              <h2>Extra Section 3</h2>
              <p>Even more content to test scrolling behavior.</p>
            </section>
          </div>
        )}
        {/* Add invisible content to enable scrolling even in fullscreen */}
        {isVideoFullscreen && (
          <div className="scroll-trigger" style={{
            height: '300vh',
            width: '100%',
            position: 'relative',
            pointerEvents: 'none',
            backgroundColor: 'rgba(255,0,0,0.1)', // Temporary visible for debugging
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px'
          }}>
            SCROLL AREA (DEBUG - will be invisible)
          </div>
        )}
      </main>
      <SimpleFooter isVisible={showHeaderFooter} />
    </div>
  );
}

export default App