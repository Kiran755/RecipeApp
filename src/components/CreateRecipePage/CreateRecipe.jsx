import React, { useState } from 'react'
import api from '../../API/api';
import { useNavigate } from 'react-router-dom';

const CreateRecipe = () => {
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState({ title: "", type: "Breakfast", eta: "", serving: "", ingredients: [], method: [] });
    const [Ingredient, setIngredient] = useState({ name: "", qty: "", unit: "" })
    const [Method, setMethod] = useState("");
    const AddIngredient = () => {
        setRecipe({ ...recipe, ingredients: [...recipe.ingredients, Ingredient] })
    }
    const AddMethod = () => {
        setRecipe({ ...recipe, method: [...recipe.method, Method] })
    }
    const SaveRecipe = async () => {
        try {
            const response = await api.post("/recipe/createRecipe", {
                recipe: recipe
            }, {
                withCredentials: true
            })

            if (response.data.result) {
                console.log(response.data.result)
                alert("Successfully created!")
            }
        } catch (e) {
            console.error(e.message)
        }
    }
    const removeIngredient = (index) => {
        let arr = []
        arr = recipe.ingredients.filter((ing, ind) => ind !== index)
        setRecipe({ ...recipe, ingredients: [...arr] })
    }
    const removeMethod = (index) => {
        let arr = []
        arr = recipe.method.filter((method, ind) => ind !== index)
        setRecipe({ ...recipe, method: [...arr] })
    }
    const back = () => {
        navigate("/home")
    }
    return (
        <div className='w-screen min-h-screen bg-secondary'>
            <div className='p-2'>
                <div>
                    <div className='text-white p-4 font-Inter' onClick={back}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className='text-white p-4 text-3xl font-Inter'>
                        INFO:
                    </div>
                    <div className='p-4'>
                        <input type="text" className='p-2 w-4/5 rounded-lg shadow-md' placeholder="Title" value={recipe.title} onChange={e => setRecipe({ ...recipe, title: e.target.value })} />
                    </div>
                    <div className='p-4'>
                        <select className='p-2 w-4/5 rounded-lg shadow-md' onChange={e => setRecipe({ ...recipe, type: e.target.value })}>
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                        </select>
                    </div>
                    <div className='p-4'>
                        <div className='w-4/5 inline-block text-left'>
                            <input type="text" className='p-2 w-1/2 rounded-lg shadow-md' placeholder="ETA: 12min,3hr etc" value={recipe.eta} onChange={e => setRecipe({ ...recipe, eta: e.target.value })} />
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='w-4/5 inline-block text-left'>
                            <input type="text" className='p-2 w-1/2 rounded-lg shadow-md' placeholder="serving" value={recipe.serving} onChange={e => setRecipe({ ...recipe, serving: e.target.value })} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-white p-4 text-3xl font-Inter'>
                        INGREDIENTS:
                    </div>
                    <div>
                        <div>
                            {
                                recipe.ingredients && recipe.ingredients.length != 0 ?
                                    recipe.ingredients.map((ingredient, index) => {
                                        return <div className='p-4 ' key={index}>
                                            <input type="text" readOnly placeholder="Ingredient" className='p-2 w-1/3 mr-2 rounded-lg shadow-md ' value={ingredient.name}></input>
                                            <input type="text" readOnly placeholder="Qty" className='w-14 p-2 mx-2 rounded-lg shadow-md' value={ingredient.qty} ></input>
                                            <input type="text" readOnly placeholder="Unit" className='w-14 p-2 mx-2 rounded-lg shadow-md' value={ingredient.unit} ></input>
                                            <span className='inline-block w-10 p-2 text-center mx-1 rounded-lg shadow-md bg-white' onClick={() => { removeIngredient(index) }}>
                                                <i className="fa-solid fa-xmark text-lg"></i>
                                            </span>
                                        </div>
                                    }) : null

                            }
                            <div className='p-4 '>
                                <input type="text" placeholder="Ingredient" className='p-2 w-1/3 mr-2 rounded-lg shadow-md' value={Ingredient.name} onChange={e => setIngredient({ ...Ingredient, name: e.target.value })}></input>
                                <input type="text" placeholder="Qty" className='w-14 p-2 mx-2 rounded-lg shadow-md' value={Ingredient.qty} onChange={e => setIngredient({ ...Ingredient, qty: e.target.value })}></input>
                                <input type="text" placeholder="Unit" className='w-14 p-2 mx-2 rounded-lg shadow-md' value={Ingredient.unit} onChange={e => setIngredient({ ...Ingredient, unit: e.target.value })}></input>
                                {/* <span className='inline-block w-10 p-2 text-center mx-1 rounded-lg shadow-md bg-white'>
                                    <i className="fa-solid fa-xmark text-lg"></i>
                                </span> */}
                            </div>
                            <div className='p-4 text-right'>
                                <button className='w-20 h-12 bg-white rounded-lg shadow-md' onClick={AddIngredient}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-white p-4 text-3xl font-Inter'>
                        METHOD:
                    </div>
                    <div>
                        {
                            recipe.method && recipe.method.length != 0 ? recipe.method.map((method, index) => {
                                return <div className='p-4 ' key={index}>
                                    <span className='text-white text-xl m-1'>
                                        {index + 1}.
                                    </span>
                                    <input type="text" placeholder="Step" readOnly className='p-2 w-3/4 mr-2 rounded-lg shadow-md' value={method} ></input>
                                    <span className='inline-block w-10 p-2 text-center mx-1 rounded-lg shadow-md bg-white' onClick={() => removeMethod(index)}>
                                        <i className="fa-solid fa-xmark text-lg"></i>
                                    </span>
                                </div>
                            }) : null
                        }
                        <div className='p-4 '>
                            <input type="text" placeholder="Step" className='p-2 w-4/5 mr-2 rounded-lg shadow-md' value={Method} onChange={e => setMethod(e.target.value)}></input>
                        </div>
                        <div className='p-4 text-right'>
                            <button className='w-20 h-12 bg-white rounded-lg shadow-md cursor-pointer' onClick={AddMethod}>Add</button>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='w-24 h-14 bg-white rounded-lg shadow-md'
                        onClick={SaveRecipe}
                    >
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateRecipe