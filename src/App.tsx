import React from 'react'

import logo from './logo.svg'
import './App.css'
import Hello from './components/Hello'
import HookCounter from './components/HookCounter'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello />
      <HookCounter />
    </header>
  </div>
)

export default App
