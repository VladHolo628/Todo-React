
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoCategory.css"


const TodoCategory = (props) => {
    const category = props.category;
    const classes = `todo__category todo__category--${category}`
    const title = category === 'high'?"High":"Low"
    const defaultStatus = 'In progress'

    const initialTasks = []
    const [id, setId] = useState(0)
    const [text, setText] = useState('')
    const [tasks, setTasks] = useState(initialTasks)
    const [checkStatus, setCheckStatus] = useState('inProgress');


    function changeStatus(task, status) {
      const currentTask = tasks.find((item) => item.id === task.id);
      console.log(currentTask)

    }
    

  const submitHandler = (e) => {

    const target = e.target;
    e.preventDefault()

    setTasks([
      ...tasks,
      {
        title:text,
        id:id,
        done: false
      }
    ])

    target.reset()

    setText('')
    
    setId(id + 1)
  }  

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const deleteHandler = (e) => {
    const filtered = tasks.filter((task => task.id != e.target.closest('.todo__item').id))
    setTasks(filtered)
  }


  const checkHandler = (e) => {
    const elem = e.target.closest('.todo__item')
    setTasks([
      ...tasks.map(item => {
        if (item.id != elem.id) {
          return {...item}
        } else {
          return {...item, done: !item.done}
        }
      })
    ])
  }

  let tasksList = tasks.map((task) => {
    return <TodoItem text={task.title} key={task.id} id={task.id} deleteHandler={deleteHandler} checkHandler = {checkHandler} done={task.done}></TodoItem>
  })

    return (
      <div className={classes}>
        <h3 className="todo__category-title">{title}</h3>
        <TodoForm category={category} submitHandler={submitHandler} changeHandler={changeHandler} value={text}></TodoForm>
        <ul className={`todo__category-list todo__category-list--${category}`}>
          {tasksList}
        </ul>
      </div>
    )
}

export default TodoCategory