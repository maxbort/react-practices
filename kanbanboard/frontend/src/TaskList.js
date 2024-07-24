import React, {useRef} from 'react';
import Task from './Task';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';

function TaskList({no, tasks, addTask, updateTask, deleteTask}) {   
    const inputRef = useRef(null);   

    return (
        <div className={Task_List}>
            <ul>
                {tasks.map((e)=> <Task key={e.no} 
                                        no={e.no} 
                                        name={e.name} 
                                        done={e.done} 
                                        updateTask={updateTask} 
                                        deleteTask={deleteTask}/>) }
            </ul>
            <input
                ref={inputRef} 
                className={Input_Add_Task} type='text' placeholder='add Task...' 
                onKeyDown={(e) => {
                    if (e.key==="Enter") {
                        addTask({
                            name: e.target.value,
                            card_no: no
                        });
 
                        inputRef.current.value = null 
                    }

                }}/>
        </div>
    );
}

export default TaskList;