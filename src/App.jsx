import { TodoApp } from './components/TodoApp'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, LoginPage } from './pages'

function App() {


  return (
    <>
      <header className='p-4 bg-success text-light text-center'>
        <p className="display-3">Práctica Todolist</p>
      </header>

      <main className="container my-5">
        <div>
          <p>Rutas App</p>
          <hr/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/*' element={<Navigate to={'/'} />} />
          </Routes>
        </div>

        <TodoApp />
      </main>

      <footer className='p-1 bg-success text-light text-center'>
        <p>Práctica Todolist</p>
      </footer>
    </>
  );
};

export default App
