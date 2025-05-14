import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'

function App() {
  let myObj={
  username:"Nitin",
  age: 21
}
  return (
    <>
     <h1 className='bg-green-400 p-4 text-black rounded mb-3'>Tailwind Test</h1>
     <Card username="Nitin" btntext='Click Me'/>
     <Card username="Aman" btntext='Click Me'/>
    </>
  )
}
export default App
