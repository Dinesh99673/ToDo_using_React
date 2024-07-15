import React from 'react';


function ToDoItem(props) {

    //CallBack Functionc are used to pass the id of the item to the parent component
    // and the parent component will handle the deletion,updation,complition of the item
    return(
        <>
            <div className='flex justify-between font-serif mt-3 overflow-hidden w-full'>
                <div className='flex flex-row' key={props.key}>
                    <input type="checkbox" onChange={()=>(props.checkBox(props.id))}/>
                    <p className={props.flag?'line-through ml-2 mt-0':'ml-2 mt-0'}>{props.todo}</p>
                </div>
                <div className='flex gap-4 md:mr-[30%] mt-1'>
                    <button className='size-6 hover:bg-orange-500 p-0.5 rounded-md ' onClick={()=>(props.onEdit(props.id))} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>
                    </button>
                    <button className='size-6 hover:bg-orange-500 p-0.5 rounded-md' onClick={()=>(props.onDelete(props.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ToDoItem;