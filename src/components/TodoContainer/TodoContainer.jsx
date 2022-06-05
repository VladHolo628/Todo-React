import './TodoContainer.css'

const TodoContainer = (props) => {
    const classes = `todo  ${props.className}`
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default TodoContainer