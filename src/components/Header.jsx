import React from "react";

function Header() {
    return(
        <>
            <div className='flex justify-between overflow-hidden bg-yellow-400 w-full h-12 shadow-lg border-collapse'>
                <h1 className='text-2xl font-bold text-white p-3 font-serif'><span className='text-bold text-orange-500'>ToDo</span> List</h1>
            </div>
        </>
    );
}

export default Header;