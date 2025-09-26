import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import promoDesktop from "../../assets/video/promo-desktop.mp4";
import promoMobile from "../../assets/video/promo-mobile.mp4";
import muted from "../../assets/img/video-muted.png";
import unmuted from "../../assets/img/video-unmuted.png";
import "./Video.css";

const Video = ({ isFullscreen = true, onTransition, videoContainerRef }) => {
    const isMobile = useMediaQuery('(max-width:720px)');

    // Get mute preference from localStorage, default to false (unmuted)
    const getStoredMutePreference = () => {
        const stored = localStorage.getItem('videoMutePreference');
        return stored ? JSON.parse(stored) : false; // Default to unmuted
    };

    const [isMuted, setIsMuted] = useState(getStoredMutePreference);
    const [currentVideoSrc, setCurrentVideoSrc] = useState(isMobile ? promoMobile : promoDesktop);
    const videoRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Reset interaction state when going back to fullscreen
    useEffect(() => {
        if (isFullscreen && hasInteracted) {
            setHasInteracted(false);
        }
    }, [isFullscreen, hasInteracted]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
            videoRef.current.controls = false;

            // Try to play with sound first, fallback to muted if blocked
            videoRef.current.play().catch(() => {
                // If autoplay fails (likely due to sound), mute and try again
                if (!isMuted) {
                    videoRef.current.muted = true;
                    videoRef.current.play().catch(console.error);
                }
            });
        }
    }, [isMuted]);

    // Update video source when mobile/desktop state changes
    useEffect(() => {
        const newSrc = isMobile ? promoMobile : promoDesktop;
        if (newSrc !== currentVideoSrc) {
            setCurrentVideoSrc(newSrc);

            if (videoRef.current) {
                const currentTime = videoRef.current.currentTime;
                const wasPaused = videoRef.current.paused;

                videoRef.current.src = newSrc;
                videoRef.current.load();

                videoRef.current.addEventListener('loadedmetadata', () => {
                    videoRef.current.currentTime = currentTime;
                    if (!wasPaused) {
                        videoRef.current.play();
                    }
                }, { once: true });
            }
        }
    }, [isMobile, currentVideoSrc]);

    // Handle scroll and click interactions
    useEffect(() => {
        if (!isFullscreen || hasInteracted) return;

        const handleInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                if (onTransition) {
                    onTransition();
                }
            }
        };

        const handleScroll = (e) => {
            if (window.scrollY > 10) { // Lower threshold for easier triggering
                handleInteraction();
            }
        };

        const handleWheel = (e) => {
            if (e.deltaY > 0) { // Scrolling down
                handleInteraction();
            }
        };

        const handleClick = () => {
            handleInteraction();
        };

        const handleTouch = () => {
            handleInteraction();
        };

        // Add multiple event listeners for better detection
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('wheel', handleWheel, { passive: true });
        document.addEventListener('click', handleClick);
        document.addEventListener('touchstart', handleTouch);
        document.addEventListener('touchmove', handleTouch);

        // Also add keyboard support
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') {
                handleInteraction();
            }
        };
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('wheel', handleWheel);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('touchstart', handleTouch);
            document.removeEventListener('touchmove', handleTouch);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isFullscreen, hasInteracted, onTransition]);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);

            // Save preference to localStorage
            localStorage.setItem('videoMutePreference', JSON.stringify(newMutedState));
        }
    };

    return (
        <div
            ref={videoContainerRef}
            className={`video-container ${isFullscreen ? 'fullscreen' : 'embedded'}`}
        >
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted={isMuted}
                loop
                poster=""
                key={currentVideoSrc}
            >
                <source
                    src={currentVideoSrc}
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            <button
                className="mute-button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                <img
                    src={isMuted ? muted : unmuted}
                    alt={isMuted ? "muted" : "unmuted"}
                />
            </button>

            {isFullscreen && (
                <div className="interaction-hint">
                    <p>Click or scroll to continue</p>
                </div>
            )}
        </div>
    );
};

export default Video;
