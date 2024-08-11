import React from "react";
import { v4 as uuid } from 'uuid'
import { useState} from "react";
import ToDoItem from "./ToDoItem";


function TodoBody(){
    
    //To display the Current Date
    const date = new Date();
    //temprary storage for Todo 
    const [todo, setTodo] = useState("");
    //List of all ToDos
    const [todos, setTodos] = useState([]);

    //Function to cross the Done work
    function checkBox(id){ 
        let temp = todos
        temp.filter((item)=>{
            if(item.key===id){
                item.flag = !item.flag;
            }
            return item;
        });
        setTodos([...temp]);
    }
    
    //Function to Edit the Todo
    function onEdit(id){
        setTodos((prevTodos)=>{
            return prevTodos.filter((item)=>{
                if(item.key===id){
                    setTodo(item.value);
                }
                else{
                    return item.key !== id;
                }
            });
        })
        console.log("Edited")
    }

    //Function to Delete the Todo
    function onDelete(id){
        setTodos((prevTodos)=>{
            return prevTodos.filter((item)=>{
                return item.key !== id;
            });
        })
        console.log("Deleted")
    }    

    // Function to Add the Todo
    const addNote = () => {
      setTodos((prevNote)=>{
        let temp = {
            key:uuid(),
            value:todo,
            flag:false
        }
        setTodo("")
        return [temp,...prevNote]
      });
      console.log(todos)
    }
    
    return(
        <div className='items-center flex flex-col h-screen'>
          <div className='w-[60%] min-h-[75%] bg-yellow-300 rounded-lg shadow-2xl border-collapse p-3 mt-[50px]'>
            <div className='flex flex-wrap gap-2 p-3'>
              <div className='flex flex-wrap gap-2 w-full'>
                <input type="text" 
                  className='rounded-xl text-sm h-7 w-3/4 p-1 border-black border-2 '
                  placeholder='Add Your ToDo'
                  value={todo}
                  onChange={(e)=>setTodo(e.target.value)}
                />
                <button onClick={addNote} className='bg-orange-500 hover:bg-orange-600 rounded-xl text-white p-0 w-7 text-xl font-bold'>+</button>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <p className='font-bold font-serif'>Your <span className='text-bold text-orange-500'>ToDos</span></p>
                  <h2 className="text-lg font-bold text-orange-500 font-serif ">{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</h2>
                </div>
            </div>
            <hr className='bg-yellow-400 h-1 rounded-lg mt-[-10px] shadow-2xl' />
              {(todos.length!==0)?
              (todos.map((item)=>(<ToDoItem todo={item.value} flag={item.flag} key={item.key} id={item.key} checkBox={checkBox} onDelete={onDelete} onEdit={onEdit}/>))):
              <h1 className="font-serif p-2 mt-1"> <span className='text-bold text-orange-500'>ToDo</span> is empty</h1>}
          </div>
        </div>
    )
}

export default TodoBody;