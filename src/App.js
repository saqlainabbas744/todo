import './App.css'
import Sidebar from './components/Sidebar.js'
import Main from './components/Main.js'
import User from './components/User.js'
import AddNewTodo from './components/AddNewTodo.js'
import Calender from './components/Calender.js'
import EditTodo from './components/EditTodo.js'
import Todo from './components/Todo.js'
import Next7Days from './components/Next7Days.js'
import RenameProject from './components/RenameProject.js'
import AddNewProject from './components/AddNewProject.js'

function App(){
  return(
    <div className='App'>
      <Sidebar>
        <User/>
        <AddNewTodo/>
        <Calender/>
        <AddNewProject/>
        <RenameProject/>
      </Sidebar>
      <Main>
        <Todo/>
        <Next7Days/>
        <EditTodo/>
      </Main>
    </div>
  );
}

export default App