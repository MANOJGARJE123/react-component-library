import { useState } from 'react'
import './App.css'
import { SideBar } from './components/SideBar'
import { TableGrid } from './components/TableGrid/TableGrid'

function App() {
  const [isSidearOpen, setIsSidebarOpen] = useState(false);
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
  ];
  const rowData = [
    { name: 'manoj', age: 30 },
  ];

  return (
    <div>
    <div>
      <SideBar isOpen={isSidearOpen} onOpen={() => setIsSidebarOpen(true)} onClose={() => setIsSidebarOpen(false)}>
        <h2>SideBar Content</h2>
      </SideBar>
    </div>
    <div>
      <h1>React component library</h1>
         <TableGrid columns={columns} rowData={rowData}></TableGrid>
    </div>
    </div>
  )
}

export default App
