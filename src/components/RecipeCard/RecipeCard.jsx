import React from 'react'
import coffee from "../../assets/coffee.svg"
const ShowInfo = ({ icon, info }) => {
    return (
        <div className='flex flex-row'>
            <div>
                {icon}
            </div>
            <div>
                {info}
            </div>
        </div>
    )
}

const RecipeCard = ({ time, type, title, serving }) => {
    return (

        <div className='bg-white m-3 w-4/5 h-96  rounded-3xl'>
            <div className='w-full h-3/4  rounded-s-3xl rounded-e-3xl bg-light'>
                <img src={coffee} className='w-full h-full p-4' />
            </div>
            <div className='px-2 py-1 mt-2 w-full h-8 text-left rounded-xl'>
                <div className='px-2 py-2 flex flex-row justify-start items-center w-full h-full rounded-xl '>
                    <div className='text-lg'>
                        Title:
                    </div>
                    <div className="text-lg font-semibold p-2">
                        {title}
                    </div>
                </div>
            </div>
            <div className='px-2 py-1 mt-1 w-full h-12 '>
                <div className='px-2 flex flex-row justify-between items-center w-full h-full rounded-xl bg-gray-200'>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <div>
                            {time}
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-solid fa-mug-saucer"></i>
                        </div>
                        <div>
                            {type}
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-solid fa-bowl-rice"></i>
                        </div>
                        <div>
                            {serving}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RecipeCard