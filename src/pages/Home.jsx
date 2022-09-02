import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { Alert } from "flowbite-react/lib/cjs/components/Alert";
import useMessage from "../custom-hooks/useMessage";
import getTodosList from '../api/todos/Get';
import TasksGroupCard from '../components/cards/TasksGroupCard';
import CreateTaskModal from '../components/modals/CreateTaskModal';
import EditTaskModal from '../components/modals/EditTaskModal';
import DeleteTaskModal from '../components/modals/DeleteTaskModal';

export default function Home(){
    const {message, setMessage } = useMessage();

    const [todoList, setTodoList] = useState();

    const [updateTimes, setUpdateTimes] = useState(0);

    const [addTaskModalDisplay, setAddTaskModalDisplay]         = useState(false);
    const [editTaskModalDisplay, setEditTaskModalDisplay]       = useState(false);
    const [deleteTaskModalDisplay, setDeleteTaskModalDisplay]   = useState(false);
    
    const [todoID, setTodoID] = useState();
    const [itemID, setItemID] = useState();

    const [itemData, setItemData] = useState();

    useEffect(() => {
        let mounted = true;
        getTodosList()
            .then( todos => {
                if(mounted) { 
                    setTodoList(todos);
                }
            });
        return () => mounted = false;
    }, [message, updateTimes])

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
            { todoList ? 
                (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 items-start">
                    { todoList.map( (todo, index) => 
                        <TasksGroupCard 
                            key={todo.id} 
                            todo={ todo } 
                            index={ index }
                            leftID={ todoList[index-1] ? todoList[index-1].id : 0 }
                            rightID={ todoList[index+1] ? todoList[index+1].id : 0 }
                            total = { todoList.length }
                            setTodoID={ setTodoID }
                            setItemID={ setItemID }
                            setItemData={ setItemData }
                            setAddModalDisplay={ setAddTaskModalDisplay }
                            setEditModalDisplay={ setEditTaskModalDisplay }
                            setDeleteModalDisplay={ setDeleteTaskModalDisplay }
                            setMessage={ setMessage }
                            updateTimes={ updateTimes }
                            setUpdateTimes={ setUpdateTimes }
                        />
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
            <CreateTaskModal 
                display={ addTaskModalDisplay } 
                setDisplay={ setAddTaskModalDisplay } 
                todo_id={ todoID } 
                setMessage={ setMessage }
                updateTimes={ updateTimes }
                setUpdateTimes={ setUpdateTimes }
            />
            <EditTaskModal 
                display={ editTaskModalDisplay } 
                setDisplay={ setEditTaskModalDisplay } 
                todo_id={ todoID }
                item_id={ itemID }
                itemData={ itemData }
                setMessage={ setMessage } 
                updateTimes={ updateTimes }
                setUpdateTimes={ setUpdateTimes }
            />
            <DeleteTaskModal 
                display={ deleteTaskModalDisplay } 
                setDisplay={ setDeleteTaskModalDisplay } 
                todo_id={ todoID }
                item_id={ itemID }
                setMessage={ setMessage } 
                updateTimes={ updateTimes }
                setUpdateTimes={ setUpdateTimes }
            />
        </>
    );
}