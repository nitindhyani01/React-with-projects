import { useState } from 'react';
import './App.css'; // Make sure this includes Tailwind directives

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div
      className="w-full h-screen transition-all duration-500 flex justify-center items-center"
      style={{ backgroundColor: color }}>
        
      </div>
</>
  );
}

export default App;
