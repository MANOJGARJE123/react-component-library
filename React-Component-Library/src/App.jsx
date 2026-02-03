import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBar } from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)
  const [isSidearOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <SideBar isOpen={isSidearOpen} onOpen={() => setIsSidebarOpen(true)} onClose={() => setIsSidebarOpen(false)}>
        <h2>SideBar Content</h2>
      </SideBar>
    </>
  )
}

export default App
