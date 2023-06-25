import { useState } from 'react'
import './App.css'
import Navigation from './components/NavigationPage/Navigation'
import SearchButton from './components/SearchButton/SearchButton'
import circle from "./assets/Ellipse.svg"
import btmCircle from "./assets/btmCircle.svg"
import WelcomePage from './components/WelcomePage/WelcomePage'
import CreateRecipe from './components/CreateRecipePage/CreateRecipe'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'
import RecipeInfo from './components/RecipeInfoPage/RecipeInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<WelcomePage />} />
        <Route path="/recipe/create" element={<CreateRecipe />} />
        <Route path="/recipe/info/" element={<RecipeInfo />} />
      </Routes>
    </>
  )
}

export default App
