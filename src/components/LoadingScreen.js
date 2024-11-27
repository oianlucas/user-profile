// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';  // Import the corresponding CSS file

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set timeout for 1.5 seconds to hide the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clean up the timeout when the component unmounts
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
<img src="/ashlar.png" alt="Loading Logo" className="loading-logo" />
      </div>
    );
  }

  return null;
}

export default LoadingScreen;
