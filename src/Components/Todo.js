import './Todo.css'
import { useState } from "react"

const Todo = (props) => {
    const [value , setValue] = useState('')

    const InputchangeHandler = (e) => {
        setValue(e.target.value)
    }

    const FormSubmitHandler = (e) => {
        e.preventDefault()
        setValue("")
        
        const AddId = {
            value : value,
            id : Math.random().toString()
        }

        props.OnSave(AddId)
        

    }


    return (
        <form onSubmit={FormSubmitHandler} >
            <div className='cont'>
                <input type="text" value={value} onChange={InputchangeHandler} />
                <button>ADD</button>
            </div>
        </form>
    )
}

export default Todo