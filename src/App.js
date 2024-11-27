import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'; // Import useParams here
import Profile from './Profile'; // Import your Profile component
import './App.css'; // Or the correct path to your CSS file

// Users data with ian and gabriel
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Dynamic Route to handle user profiles */}
        <Route path="/:username" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

// Create a component to handle user profile based on the username from the URL
function UserProfile() {
  const { username } = useParams(); // Extract the username from the URL
  const user = users[username]; // Find the user data by the username

  if (!user) {
    return <div>User not found</div>; // If user doesn't exist
  }

  return <Profile user={user} />; // Render the Profile component with the user data
}

export default App;
