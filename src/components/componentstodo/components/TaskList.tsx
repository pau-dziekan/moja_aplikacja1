import { doesNotReject } from 'assert'
import React, { useState } from 'react'
import Task from './Task'

interface TaskList {
    tasks:{id:number, text:string; date:string}[];
    delete: (id:number) => void;
}


const TaskList = (props:TaskList) => {
    const tasks = props.tasks.sort((a:any,b:any) => a.date - b.date).map(task => <Task key={task.id} 
        task={task} delete={props.delete}/>)

       

    return (
        <div className='active'>
            <h2>Lista zadań</h2>
              {tasks}
        </div>
    )
}

export default TaskList
