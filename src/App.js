import { useState } from "react";
import DeleteModal from "./Components/DeleteModal";
import Todo from "./Components/Todo";
import './App.css'

function App() {

  const [state , setState ] = useState([])
  const [error , setError] = useState(false)

  function ModalError () {
    if(state){
      setError({
        title : " Эскертуу ",
        message : "Точно Удалить ?"
      })
      
    }
  }

  function Save (date) {
    setState((prevState) => {
      return [...prevState,date]
    })
  }

  function filter (e){
    setState(state.filter((el) => el.id !== e.target.id ))
    setError(false)
  }
  


  return (
    <div className="App">
      
      <Todo OnSave={Save}/>
      {
        state.map((el) => {
         
          return <p key={el.id} >{el.value}
          <button id={el.id} onClick={ModalError}>Delete</button>
          {error && <DeleteModal onFilter={filter} onFals={setError} title={error.title} message={error.message} id={el.id}  />}
          </p>
        })
      }
    </div>
  )

  }





export default App;
