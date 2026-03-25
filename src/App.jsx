import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-600 dark:text-sky-400 flex justify-center items-center font-extrabold  text-8xl'>I am Dev.</h1>
    </>
  )
}

export default App
