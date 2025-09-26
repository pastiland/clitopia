import React from 'react';

const ScrollDebugger = ({
    scrollY,
    lastScrollY,
    showHeader,
    isVideoFullscreen,
    videoRect,
    isVideoVisible
}) => {
    const debugStyle = {
        position: 'fixed',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '12px',
        zIndex: 9999,
        lineHeight: '1.4',
        minWidth: '300px'
    };

    const direction = scrollY > lastScrollY ? 'DOWN' : scrollY < lastScrollY ? 'UP' : 'NONE';

    return (
        <div style={debugStyle}>
            <h4 style={{ margin: '0 0 10px 0', color: '#00fff8' }}>SCROLL DEBUG</h4>
            <div><strong>Scroll Y:</strong> {scrollY}</div>
            <div><strong>Last Scroll Y:</strong> {lastScrollY}</div>
            <div><strong>Direction:</strong> <span style={{ color: direction === 'DOWN' ? 'red' : direction === 'UP' ? 'green' : 'yellow' }}>{direction}</span></div>
            <div><strong>Show Header:</strong> <span style={{ color: showHeader ? 'green' : 'red' }}>{showHeader ? 'YES' : 'NO'}</span></div>
            <div><strong>Video Fullscreen:</strong> <span style={{ color: isVideoFullscreen ? 'green' : 'red' }}>{isVideoFullscreen ? 'YES' : 'NO'}</span></div>

            <hr style={{ margin: '10px 0', border: '1px solid #333' }} />

            <div><strong>Video Top:</strong> {videoRect?.top?.toFixed(1) || 'N/A'}</div>
            <div><strong>Video Bottom:</strong> {videoRect?.bottom?.toFixed(1) || 'N/A'}</div>
            <div><strong>Video Height:</strong> {videoRect?.height?.toFixed(1) || 'N/A'}</div>
            <div><strong>Window Height:</strong> {window.innerHeight}</div>
            <div><strong>Video Visible:</strong> <span style={{ color: isVideoVisible ? 'green' : 'red' }}>{isVideoVisible ? 'YES' : 'NO'}</span></div>

            <hr style={{ margin: '10px 0', border: '1px solid #333' }} />

            <div style={{ fontSize: '10px', color: '#ccc' }}>
                Logic: {scrollY === 0 ? 'AT TOP' : isVideoVisible ? 'VIDEO VISIBLE' : 'VIDEO HIDDEN'}
            </div>
        </div>
    );
};

export default ScrollDebugger;