import React from 'react'
import './App.css';
import Todo from "./components/todo"

function App() {
  const todos = [
    {id: 1, title:'make dinner', completed: true},
    {id: 2, title:'wash dishes', completed: false}
]
  return (
    <div className="App">
     { todos.map((todo) => {
      return (<Todo todo={todo} key={todo.id}/>)
     })
     }
    </div>
  );
}

export default App;