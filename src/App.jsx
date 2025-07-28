import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Courses from './pages/Courses'
import SelectCourse from './pages/SelectCourse'
import SelectedList from './components/SelectedList'
import EditeCourse from './pages/EditeCourse'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/'  element={<Home />}/>
                <Route path='/courses' element={<Courses />}/>
                <Route path='/selectcourse' element={<SelectCourse />} />
                <Route path='/course-list' element={<SelectedList />} />
                <Route path='/editecourse/:id' element={<EditeCourse />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;