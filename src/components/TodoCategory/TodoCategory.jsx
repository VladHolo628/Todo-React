
import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoCategory.css"


const TodoCategory = (props) => {
  const category = props.category;
  const classes = `todo__category todo__category--${category}`
  const title = category === 'high'?"High":"Low";
  let initialTasks = [];

  const [id, setId] = useState(Math.floor(Math.random() * 100)
  )
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState(initialTasks)
  
    
  const submitHandler = (e) => {

    const target = e.target;
    e.preventDefault()
    const taskIsPresent = tasks.some((task) => task.title === text);
    if(taskIsPresent) {
      setText('This task is already added!')

      setTimeout(() => {
        setText('')
      },1000)

      return
    }
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
    
    setId(Math.floor(Math.random() * 100)
    )
  }  

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const deleteHandler = (e) => {
    const filtered = tasks.filter((task => task.id != e.target.closest('.todo__item').id))
    setTasks(filtered)
  }



  useEffect(() => {
    
    const targetList = category === "high"?'tasksListHigh':'tasksListLow';
    const retrievedTasks = JSON.parse(localStorage.getItem(targetList)) || [];

    setTasks(retrievedTasks)
  },[])

useEffect(() => {
  const targetList = category === "high"?'tasksListHigh':'tasksListLow';
  const formattedTasks = JSON.stringify(tasks || [])
  localStorage.setItem(targetList,formattedTasks)
},[tasks])




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