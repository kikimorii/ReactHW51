import styles from './App.module.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [todos, setTodos] = useState([{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": true
  }]);

  return (
    <div className={styles.app}>
      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>{title} - <span className={completed ? styles.completed : styles.incompleted}>{completed ? 'completed' : 'incompleted'}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default App;