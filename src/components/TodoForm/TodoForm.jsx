import "./TodoForm.css"
import icon from '../../img/add-icon.svg'

const TodoForm = (props) => {
const category = props.category;

return(
    <form onSubmit={props.submitHandler} className={`todo__form todo__form--${category}`}>
    <input
        type="text"
        className={`todo__form-input todo__form-input--${category}`}
        placeholder="Добавить важных дел"
        onChange={props.changeHandler}
        value = {props.value}
    />
    <button className="todo__form-btn btn" type="submit">
        <img
        className="todo__form-icon"
        src={icon}
        alt="Add task"
        />
    </button>
    </form>
    )
}

export default TodoForm