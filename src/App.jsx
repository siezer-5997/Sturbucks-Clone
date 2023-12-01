import { useState } from 'react'
import Header from './Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1>Hello World</h1>
    </>
  )
}

export default App
