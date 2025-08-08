import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        title: "Sample Task",
        description: "This is a sample task",
        completed: false
    },
    {
        id: 2,
        title: "Another Task",
        description: "This is another task",
        completed: false
    },
    {
        id: 3,
        title: "Completed Task",
        description: "This task is completed",
        completed: true
    }
]);
    // função para completar uma tarefa
    const completeTask = (taskid) => {
        setTasks(
            tasks.map(task =>
                task.id === taskid ? { ...task, completed: true } : task
            )
        )
    }

    // função para remover uma tarefa
    const deleteTask = (taskid) => {
        setTasks(
            tasks.filter(task => task.id !== taskid)
        )
    }

    return (
        <div>
            <h1>Lista de tarefas</h1>
            {
                tasks.length === 0 ? (
                    <p>Nenhuma tarefa encontrada.</p>
                ) : (
                    <div>
                        <p>Total de tarefas: {tasks.length} | 
                            Concluidas: {tasks.filter(task => task.completed).length}
                        </p>
                        {
                            tasks.map( task => (
                                <TaskItem 
                                key={task.id} 
                                task={task} 
                                onComplete={completeTask} 
                                onDelete={deleteTask} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );


}
