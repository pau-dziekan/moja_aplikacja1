import React from 'react'

interface Task {
    task: {text:string, date:string, id:number};
    delete: (id:number) => void;
  }

const Task = (props:Task) => {

    const { text, date , id, } = props.task

    return (
        <div>
            
            <p>
                <strong>{text}</strong> - do <span>{date} </span>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
                
        </div>

    )
}

export default Task
