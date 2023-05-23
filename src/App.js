import Advice  from './component/Api';
import './App.css';
import Todo from './component/Todo-list';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      <Advice />
      <Todo />
      <Login />
    </div>
  );
}

export default App;
