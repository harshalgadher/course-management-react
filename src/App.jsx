import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SelactCourse from './pages/SelactCourse'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='courses' element={<Courses />}/>
                <Route path='selactcourse' element={<SelactCourse />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;