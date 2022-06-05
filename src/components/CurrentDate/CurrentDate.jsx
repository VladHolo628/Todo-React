import './CurrentDate.css'
import { format } from 'date-fns'
const CurrentDate = (props) => {
    const formattedDate = format(props.date, 'MM.dd.yyyy EEE')
    return (
        <span className="todo__current-date">{formattedDate}</span>
    )
}

export default CurrentDate