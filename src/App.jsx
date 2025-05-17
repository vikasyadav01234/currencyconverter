import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex 
    flex-wrap justify-center items-center 
    bg-cover bg-no-repeat'
    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJsdXUlMjB3YWxsJTIwY29sb3J8ZW58MHx8fHwxNjg5NTQ1NzA0&ixlib=rb-4.0.3&q=80&w=1080)'}}
    >
      
    </div>
  )
}

export default App
