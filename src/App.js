import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Profile from './components/Profile';
import './App.css';

// Users data
const users = {
  ian: {
    name: 'Ian Paim',
    profilePicture: 'https://github.com/oianlucas.png',
    contact: {
      phone: '+555481050405',
      email: 'ian@ashlar.cloud',
      website: 'https://ashlar.solutions',
    },
    company: {
      name: 'Ashlar',
      profession: 'Managing Partner',
    },
    socials: {
      whatsapp: '+555481050405',
      instagram: 'ashlar.solutions',
      facebook: 'ashlar.solutions',
    },
  },
  gabriel: {
    name: 'Gabriel Besteiro',
    profilePicture: 'https://github.com/besteirogabriel.png',
    contact: {
      phone: '+36300920907',
      email: 'besteiro@ashlar.cloud',
      website: 'https://ashlar.solutions',
    },
    company: {
      name: 'Ashlar',
      profession: 'Managing Partner',
    },
    socials: {
      whatsapp: '+36300920907',
      instagram: 'ashlar.solutions',
      facebook: 'ashlar.solutions',
    },
  },
};

// Loading screen component
function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src="/ashlar.png" alt="Company Logo" className="loading-logo" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => {
        setIsLoading(false); // Hide loading screen after fade-out
      }, 500); // Match fade-out duration
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className={`loading-wrapper ${fadeOut ? 'fade-out' : ''}`}><LoadingScreen /></div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

function UserProfile() {
  const { username } = useParams(); // Extract username from the URL
  const user = users[username]; // Get the user data

  if (!user) {
    return <div>User not found</div>; // Handle case where user does not exist
  }

  return <Profile user={user} />; // Render the Profile component with the user data
}

export default App;
