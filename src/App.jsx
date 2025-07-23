import styles from './App.module.css';
import { useState } from 'react';

import { useGetTodos } from './hooks';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useGetTodos(setTodos, setIsLoading);

  return (
    <div className={styles.app}>
      {isLoading
        ? <div className={styles.loader}></div>
        : (
          <ul className={styles.list}>
            {todos.map(({ id, title, completed }) => (
              <li key={id}><span className={completed ? styles.completed : styles.incompleted}>{completed ? 'completed' : 'incompleted'}</span> - {title}</li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default App;