import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from "./pages/Events"
import Register from './pages/Register';
import CINIMAX from './pages/Event Pages/Cinimax/Cinimax';
import UiUxForge from './pages/Event Pages/UI UX Forge/UiUxForge';
import PITCHXPERFECT from './pages/Event Pages/PITCHXPERFECT/PITCHXPERFECT';
import XSCAPEROOM from './pages/Event Pages/XSCAPE ROOM/XSCAPEROOM';
import VOICEVAULT from './pages/Event Pages/VOICE VAULT/VOICEVAULT';
import EPICSANDEPISODES from './pages/Event Pages/EPICS AND EPISODES/EPICSANDEPISODES';
import FROZENFRAMES from './pages/Event Pages/FROZEN FRAMES/FROZENFRAMES';
import MONTAJE from './pages/Event Pages/MONTAJE/MONTAJE';
import TECHXPLORE from './pages/Event Pages/TECHXPLORE/TECHXPLORE';
import CampusAmbassador from './pages/Event Pages/CAMPUS AMBASSADOR/CampusAmbassador';
import SprintX from './pages/Event Pages/SprintX/SprintX';
import Website from './pages/Website team/Website';
import ParticipantForm from './ParticipantForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
