import React, { useEffect, useState } from 'react'
import Navigation from '../NavigationPage/Navigation'
import SearchButton from '../SearchButton/SearchButton'
import circle from "../../assets/Ellipse.svg"
import btmCircle from "../../assets/btmCircle.svg"
import RecipeCard from '../RecipeCard/RecipeCard'
import api from '../../API/api'
import { json, useNavigate } from "react-router-dom"
const WelcomePage = () => {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get("/recipe/fetchAllRecipes", {
                    withCredentials: true
                })
                if (response.data.result && response.data.payload) {
                    console.log(response.data)
                    setRecipes([...response.data.payload])
                }
                else {
                    console.log(response.data)
                }
            } catch (e) {
                console.log(e.message)
            }

        }
        fetchRecipes()
    }, [])

    const create = () => {
        navigate("/recipe/create")
    }
    const OpenFullInfo = (recipe) => {
        console.log("edadw")
        navigate("/recipe/info", { state: recipe })
    }
    return (
        <>
            <img src={circle} className='fixed right-0 w-screen h-2/3 -z-20' />
            <Navigation />
            <SearchButton />
            <div className='p-2 flex flex-col justify-center items-center'>
                {
                    recipes.length != 0 ? recipes.map((recipe) => {
                        return <div onClick={() => OpenFullInfo(recipe)} className='flex flex-row justify-center items-center'>
                            <RecipeCard key={recipe._id} time={recipe.eta} type={recipe.type} title={recipe.title} serving={recipe.serving} className="cursor" />
                        </div>
                    }) : null
                }

            </div>
            <img src={btmCircle} className='fixed left-0 bottom-0 w-screen h-1/4 -z-20' />
            <div className='h-20 w-20 rounded-full bg-secondary fixed right-5 bottom-5 shadow-md' onClick={create}>
                <i className="fa-solid fa-plus absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white"></i>
            </div>
        </>
    )
}

export default WelcomePage