import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar';

function Dashboard() {

  const [selected, setSelected] = useState(0);
  return (
    <>
    <Sidebar selected={selected} setSelected= {setSelected}>
      <h1>This is sample child</h1>
    </Sidebar>
    </>
  )
}

export default Dashboard