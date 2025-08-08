export default function TaskItem( {task, onComplete, onDelete} ) {
    return (
        <div
        style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',
            backgroundColor: task.completed ? '#e0ffe0' : '#fff'
        }}
        >
            <h3 
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
            }}  
            >{task.title}</h3>
            <p>{task.description}</p>
            <p>
                <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
            </p>
            {
                !task.completed && (
                    <button onClick={() => onComplete(task.id)}>Complete</button>
                )
            }
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>

        </div>
    )
}