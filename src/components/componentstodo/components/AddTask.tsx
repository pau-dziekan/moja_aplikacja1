import { throws } from 'assert';
import React, { useState } from 'react';
import './AddTask.scss'

interface AddTask {
  add: (text:string, date:string) => boolean
}

const AddTask = (props:AddTask) => {
    const [text,setText] = useState('');
    const [date,setDate] = useState(new Date().toISOString().slice(0,10))

   // state = {
     //   text: '',
       // date: new Date().toISOString().slice(0,10)
//}

    const handleText = (e:any) => {
        setText(e.target.value)
    }
   

    const handleDate = (e:any) => {
        setDate(e.target.value)
    }

     const handleClick = () => {
        if(props.add(text, date)) {
            if(text.length > 0){
            setText('')
            setDate(new Date().toISOString().slice(0,10))}    
        }
    }
     
        return(
            <div className='form'>
            <input type="text" placeholder='dodaj zadanie'
            value={text} onChange={handleText}/>
            <label htmlFor="date">Do kiedy zrobić</label>
            <input type="date" value={date} onChange={handleDate} />
            <button onClick={handleClick}>Dodaj</button>
        
            <hr />
            </div>
        );
    }

export default AddTask;