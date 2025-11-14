import '../App.css'
import List from './List'

function App() {
  return (
    <div id="app">
      <List target='todo' />
      <List target='weeklyTodo' />
      <List target='monthlyTodo' />
    </div>
  );
}

export default App
