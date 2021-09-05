
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer';
function App() {


  const name = "Rafael Lopez"
  return (
    <div className="App">
     <TodoList />
     <Footer name= {name}/>
    </div>
  );
}

export default App;
