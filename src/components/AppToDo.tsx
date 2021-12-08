import React, { useState } from 'react';
import AddTask from './componentstodo/components/AddTask'
import './App.scss';
import TaskList from './componentstodo/components/TaskList';



const App = () => {
const [tab,setTab] = useState([{id:0,text:'zrobić zakupy',date:'2021-12-01'},{id:1,text:'zrobić pranie',date:'2021-12-02'},
{id:2,text:'nakarmić kota',date:'2021-11-17'}]);
const [id, setId] = useState(3);




const deleteTask = (id:number) => {
  let tabTasks = tab;
  const index = tabTasks.findIndex((task:any) => task.id == id);
  tabTasks.splice(index,1);
 setTab([...tabTasks])
}

const addTask = (text:string, date:string) => {
  const task = {
    id,
    text,
    date,
  }
  setId(id+1)

 
  setTab([...tab,task])

  //this.setState(prevState => ({
    //tasks: [...prevState.tasks, task]
  //}))

  return true

  
}

 
    return(
      <div className='App'>
        <h1>Do zrobienia na dziś</h1>
        <AddTask add={addTask}/>
        <TaskList tasks={tab} delete={deleteTask}/>
       
    </div>
    );
    } 

export default App;
