import { useState } from 'react'
import Header from './components/Header'
import TodoBody from './components/TodoBody'

function App() {


  return (
    <>
      <div className='h-screen w-full bg-white'>
        <Header/>
        <TodoBody />        
      </div>
    </>
  )
}

export default App
