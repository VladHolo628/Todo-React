import './TodoItem.css'
import closeIcon from '../../img/close-icon.svg'

const TodoItem = (props) => {
   
const style = props.done? 'done': ''

    return (
        <li className={`todo__item ${style}`} id={props.id}>
            <input className="todo__item-checkbox" type="checkbox" onClick={props.checkHandler}/>
            <p className="todo__item-text">{props.text}</p>
            <button className="todo__item-btn btn" type="button" onClick={props.deleteHandler}>
            <img
                className="todo__item-icon"
                src={closeIcon}
                alt="Remove task"
            />
            </button>
        </li>
    )
}

export default TodoItem