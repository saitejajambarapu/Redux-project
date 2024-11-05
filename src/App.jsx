import { Provider} from "react-redux";
import './App.css';
import Todo from './components/todo';
import AddForm from './components/addForm';
import {store} from "./app/store";

function App() {

  return (
    <>
      <Provider store = {store}>
      <AddForm />
        <Todo />
       
      </Provider>

    </>
  )
}

export default App
