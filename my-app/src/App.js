import "./App.css";
import Header from "./components/Header";
import CreateTask from "./components/todo/CreateTask";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateTask />
    </div>
  );
}

export default App;
