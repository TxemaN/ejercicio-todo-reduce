import { useState } from 'react'
import { TodoApp } from './components/TodoApp'


function App() {


  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header className='p-5 bg-success text-light text-center'><p className='display-3'>EJERCICIO TODO CON REDUCE GRUPO</p> </header>
        <main>
          <TodoApp />

        </main>

        <footer className='p-5 bg-success text-light text-center'></footer>
      </div>
    </>
  )
}

export default App
