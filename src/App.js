import { useState } from "react"
import Header from "./components/Header"
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Grow tomatoes',
        day: 'Aug 4th at 3:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Paint the house',
        day: 'Aug 12th at 5:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'House Shopping',
        day: 'Aug 20th at 10:45am',
        reminder: true,
    }
  ]);

  //Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
       ) : ( 'No Tasks To Show' )
      }
    </div>
  )
}

export default App;
