import { TodoApp } from './components/TodoApp'


function App() {


  return (
    <>
        <header className='p-4 bg-success text-light text-center'>
        <p className="display-3">Práctica Todolist</p> 
          </header>

        <main className="container my-5">
          <TodoApp />
        </main>

        <footer className='p-1 bg-success text-light text-center'>
          <p>Práctica Todolist</p>
        </footer>
    </>
  );
};

export default App
