import './App.css'
import CurrentDate from './components/CurrentDate/CurrentDate'
import TodoCategory from './components/TodoCategory/TodoCategory'
import TodoContainer from './components/TodoContainer/TodoContainer'
function App() {

  return (
    <div className="App">
      <TodoContainer>
        <CurrentDate date={Date.now()}/>
        <TodoCategory category="high"/>
        <TodoCategory category="low"/>
      </TodoContainer>
    </div>
  )
}

export default App
