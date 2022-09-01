import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { Alert } from "flowbite-react/lib/cjs/components/Alert";
import useMessage from "../custom-hooks/useMessage";
import getTodosList from '../api/todos/Get';
import TasksGroupCard from '../components/cards/TasksGroupCard';
import CreateTaskModal from '../components/modals/CreateTaskModal';

export default function Home(){
    const { message, setMessage } = useMessage();

    const [todoList, setTodoList] = useState();

    const [addTaskModalDisplay, setAddTaskModalDisplay] = useState(false);
    const [todoID, setTodoID] = useState();

    useEffect(() => {
        let mounted = true;
        getTodosList()
            .then( todos => {
                if(mounted) { 
                    console.log(todos);
                    setTodoList(todos);
                }
            });
        return () => mounted = false;
    }, [message])

    return (
        <>
            <Header />
            { message && (
                <div className="w-full p-4">
                    <Alert color="success" 
                        onDismiss={function onDismiss(){ setMessage("") }}>
                        <span className="font-medium">
                            { message }
                        </span>
                    </Alert>
                </div>
            )}
            <CreateTaskModal display={ addTaskModalDisplay } setDisplay={ setAddTaskModalDisplay } todo_id={ todoID } setMessage={ setMessage } />
            { todoList ? 
                (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 items-start">
                    { todoList.map( todo => 
                        <TasksGroupCard key={todo.id} todo={ todo } setTodoID={ setTodoID } setDisplay={ setAddTaskModalDisplay }/>
                    )}
                </div>)
                : 
                (
                    <div className="w-full p-4">
                        <div className="w-full p-4 text-center">
                            <p className="text-lg font-semibold tracking-wide">No Tasks Group</p>
                        </div>
                    </div>
                )
            }
        </>
    );
}