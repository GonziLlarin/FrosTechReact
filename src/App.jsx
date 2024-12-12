import React from "react"
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer"

function App() {


  return (
    <>
      <div className='w-12/12'>
        <Navbar />
        <ItemListContainer greeting={"Bienvenidos al sitio de helados"} />
      </div>
    </>
  )
}

export default App
