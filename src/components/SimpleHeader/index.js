import React, { useState } from "react";
import "./SimpleHeader.css";
import logo from "../../assets/img/logo.svg";

const SimpleHeader = ({ isVisible = true, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        console.log('Navigation clicked:', targetId); // Debug log

        // Close mobile menu if open
        setIsMobileMenuOpen(false);

        const targetElement = document.getElementById(targetId);
        console.log('Target element found:', targetElement); // Debug log

        if (targetElement) {
            const headerHeight = 80;
            const targetPosition = targetElement.offsetTop - headerHeight;
            console.log('Scrolling to position:', targetPosition); // Debug log
            console.log('Current scroll position:', window.scrollY); // Debug log

            // Try multiple scroll methods
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Also try window.scrollTo as backup
            setTimeout(() => {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            console.log('Target element not found for ID:', targetId); // Debug log
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className={`simple-header ${isVisible ? 'visible' : ''}`}>
                <div className="header-content">
                    <div className="logo">
                        <img src={logo} alt="Clitopia" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav-menu desktop-nav">
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
                        <a href="#collection" onClick={(e) => handleSmoothScroll(e, 'collection')}>Collection</a>
                        <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, 'roadmap')}>Roadmap</a>
                        <a href="#community" onClick={(e) => handleSmoothScroll(e, 'community')}>Community</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                    </nav>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="hamburger-btn mobile-only"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <div className="mobile-menu-header">
                        <div className="logo">
                            <img src={logo} alt="Clitopia" />
                        </div>
                        <button
                            className="close-btn"
                            onClick={toggleMobileMenu}
                            aria-label="Close menu"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="mobile-nav">
                        <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
                        <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a>
                        <a href="#collection" onClick={(e) => handleSmoothScroll(e, 'collection')}>Collection</a>
                        <a href="#roadmap" onClick={(e) => handleSmoothScroll(e, 'roadmap')}>Roadmap</a>
                        <a href="#community" onClick={(e) => handleSmoothScroll(e, 'community')}>Community</a>
                        <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default SimpleHeader;