import React from "react";
import "./SimpleFooter.css";

const SimpleFooter = ({ isVisible = true }) => {
    return (
        <footer className={`simple-footer ${isVisible ? 'visible' : ''}`}>
            <div className="footer-content">
                <p>&copy; 2024 Clitopia. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#privacy">Privacy</a>
                    <a href="#terms">Terms</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default SimpleFooter;