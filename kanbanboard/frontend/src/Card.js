import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';
import {_Card, Card_Title,Card_Title_Open} from './assets/scss/Card.scss';

function Card({no, title, description}) {
    const [show, setShow]= useState(false);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task?no=${no}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });
            
            if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success') throw new Error(json.message);

            setTasks(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(()=> {
        fetchTasks();
    }, []);

    const addTask= async (task) => {
        try{
            const response= await fetch('/api/task' , {
                method: 'post',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success') throw new Error(json.message);

            setTasks([...tasks, json.data]);
        } catch(err) {
            console.error(err);
        }
    }

    const updateTask= async (task) => {
        try{
            const response= await fetch(`/api/task/${task.no}` , {
                method: 'put',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);

            const json = await response.json();

            if(json.result !== 'success') throw new Error(json.message);


            setTasks((prevTasks) => prevTasks.map((e) => e.no === json.data.no ? json.data : e));
        } catch(err) {
            console.error(err);
        }
    }

    const deleteTask = async (no) => {
        try{
            const response= await fetch(`/api/task/${no}` , {
                method: 'delete',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) throw new Error(`${response.status} ${response.statusText}`);
            const json = await response.json();
            if(json.result !== 'success')throw new Error(json.message);

            setTasks(tasks.filter((e) => e.no !== no));
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className={_Card}>
            <div 
                className={[Card_Title, (show ? Card_Title_Open : '')].join(' ')}
                onClick={() => { setShow(!show); }} >
                {title}
            </div>
            <div className={'Card_Details'}>{description}</div>
            
            {show ? <TaskList no={no} 
                            tasks={tasks} 
                            addTask={addTask} 
                            updateTask={updateTask} 
                            deleteTask={deleteTask} /> : null}
        </div>
    );
}

export default Card;