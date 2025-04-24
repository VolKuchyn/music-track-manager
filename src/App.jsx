import { useState } from 'react'
import Tracks from './components/tracks/Tracks'
import Toast from './components/Toast/Toast'
import Player from './components/player/Player'
import TrackModal from './components/track-modal/TrackModal'
import TrackFormModal from './components/form/TrackFormModal'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConfirmDialog from './components/confirm-dialog/confirmDialog'
import Header from './components/header/Header'

import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Tracks />} />
        <Route path="/:slug" element={<Tracks />} />
      </Routes>
      <Toast />
      <Player />
      <TrackModal />
      <TrackFormModal />
      <ConfirmDialog />


    </BrowserRouter>
  )
}

export default App
