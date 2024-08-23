import './App.css'
import Header from './components/Header.js'
import Main from './components/Main.js'
import User from './components/User.js'
import AddNewTodo from './components/AddNewTodo.js'
import Calender from './components/Calender.js'
import Projects from './components/Projects.js'
import EditTodo from './components/EditTodo.js'
import Todo from './components/Todo.js'

function App(){
  return(
    <div className='App'>
      <Header>
        <User/>
        <AddNewTodo/>
        <Calender/>
        <Projects/>
      </Header>
      <Main>
        <Todo/>
        <EditTodo/>
      </Main>
    </div>
  );
}

export default App