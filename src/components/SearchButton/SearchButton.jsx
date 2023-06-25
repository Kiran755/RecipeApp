import React from 'react'

const SearchButton = () => {
    return (
        <div className='w-screen text-center mt-14'>
            <input className="w-2/3 p-3 m-4 mt-10 rounded-lg shadow-md" type="text" placeholder="Search"></input>
            <button><i className="bg-white fa-solid fa-magnifying-glass shadow-md p-4 m-4 rounded-lg"></i></button>
        </div>
    )
}

export default SearchButton