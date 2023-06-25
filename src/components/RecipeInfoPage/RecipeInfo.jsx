import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const RecipeInfo = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state)
    const recipe = state
    const back = () => {
        navigate("/home")
    }
    return (
        <div className='w-screen min-h-screen bg-secondary'>
            <div>
                <div className='text-white p-4 font-Inter text-xl' onClick={back}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div className='text-center text-4xl text-white'>
                    {recipe && recipe.title ? recipe.title : "nothing to show"}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-4/5 p-4 border border-black h-72 m-4'>
                    Image
                </div>
            </div>
            <div className='px-2 py-1 mt-1 w-full h-12 '>
                <div className='px-2 flex flex-row justify-between items-center w-full h-full rounded-xl bg-gray-200'>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-regular fa-clock"></i>
                        </div>
                        <div>
                            {recipe && recipe.eta ? recipe.eta : null}
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-solid fa-mug-saucer"></i>
                        </div>
                        <div>
                            {recipe && recipe.type ? recipe.type : null}
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='p-1'>
                            <i className="fa-solid fa-bowl-rice"></i>
                        </div>
                        <div>
                            {recipe && recipe.serving ? recipe.serving : null}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-3xl text-white p-4 font-Inter'>
                    INGREDIENTS:
                </div>
                <table className='w-full '>
                    {
                        <tr className='w-full text-lg font-light'>
                            <th className='flex justify-between p-3'>
                                <td className=' flex-1'>
                                    Ingredient
                                </td>
                                <td className=' flex-1'>
                                    Quantity
                                </td>
                                <td className=' flex-1'>
                                    Unit
                                </td>
                            </th>
                        </tr>
                    }
                    {recipe && recipe.ingredients && recipe.ingredients.length != 0 ?

                        recipe.ingredients.map((ingredient) => {
                            return <tr className='flex flex-row justify-between p-3 text-xl text-white font-Inter items-center '>
                                <td className='flex-1 '>
                                    {ingredient.name}
                                </td >
                                <td className='flex-1  text-center'>
                                    {ingredient.qty}
                                </td>
                                <td className='flex-1  text-center'>
                                    {ingredient.unit}
                                </td>
                            </tr>
                        }) : null
                    }
                </table>
            </div>
            <div>
                <div className='text-3xl text-white p-4 font-Inter'>
                    METHOD:
                </div>
                {
                    recipe && recipe.method && recipe.method.length != 0 ?
                        recipe.method.map((step, index) => {
                            return <div className='flex flex-row justify-start p-2 mx-2 text-white text-xl font-Inter'>
                                <div>
                                    1. {index + 1}
                                </div>
                                <div>
                                    {step}
                                </div>
                            </div>
                        }) : null
                }
            </div>
        </div>
    )
}

export default RecipeInfo