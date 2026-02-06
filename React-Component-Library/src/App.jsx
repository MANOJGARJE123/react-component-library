import { useState } from 'react'
import './App.css'
import { SideBar } from './components/SideBar'
import { TableGrid } from './components/TableGrid/TableGrid'
import Dropdown from './components/DropDown'


function App() {
  const [isSidearOpen, setIsSidebarOpen] = useState(false);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'number', label: 'Number' },
  ];
  const rowData = [
    { name: 'manoj', age: 22, number: '123-456-7890' },
    { name: 'manoj', age: 22, number: '123-456-7890' },
    { name: 'manoj', age: 22, number: '123-456-7890' },
    { name: 'manoj', age: 22, number: '123-456-7890' },
    { name: 'manoj', age: 22, number: '123-456-7890' },
  ];
  const actions = [
    { label: 'Edit', onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', onClick: (row) => console.log('Delete', row) },
  ]

  return (
    <div>
      <div>
        <SideBar
          isOpen={isSidearOpen}
          onOpen={() => setIsSidebarOpen(true)}
          onClose={() => setIsSidebarOpen(false)}>
          <h2>SideBar Content</h2>
        </SideBar>
      </div>

      <div>
        <h1>component library</h1>
        <Dropdown
          options={[
            {
              label: "Edit",
              onClick: () => console.log("Edit clicked"),
            },
            {
              label: "Delete",
              onClick: () => console.log("Delete clicked"),
            },
          ]}
        />
        <br /><br />
        <TableGrid columns={columns} rowData={rowData} actions={actions}/>
      </div>
    </div>
  )
}

export default App