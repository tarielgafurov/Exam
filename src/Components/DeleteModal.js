import './DeleteModal.css'
const DeleteModal = (props) => {



    return (
        <div className="Cont">
            <header>
                <h3>{props.title}</h3>
            </header>
            <div className='text'>
                <p>{props.message}</p>
                <button id={props.id} onClick={props.onFilter} className='but1'>DA</button>
                <button  className='but2'>NET</button>
            </div>
        </div>
    )
}

export default DeleteModal