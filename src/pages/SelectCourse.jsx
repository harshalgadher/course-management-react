import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCourse } from '../features/course/courseSlice'

const SelectCourse = () => {
  const [input, setinput] = useState({
    name: "",age: "",email: "",phone: "",course:"",

  });
  const dispatch = useDispatch();
  
  const navigate = useNavigate()

  const handlechange = (e) => {
    setinput({ ...input, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addCourse(input));
      navigate('/course-list')
  };

  return (
    <>
      <section className='container mx-auto w-4/12'>

        <form onSubmit={handleSubmit} className='border-2 p-10 rounded-md mt-8'>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
              <input type="text" id="name" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5 " placeholder="John" onChange={handlechange} value={input.name}  />
            </div>
            <div>
              <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 ">Age</label>
              <input type="text" id="age" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5 " placeholder="Enter Age" onChange={handlechange} value={input.age} required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
              <input type="email" id="email" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5 " placeholder="Enter your email" onChange={handlechange} value={input.email} required />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
              <input type="tel" id="phone" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5 " placeholder="123-45-678" pattern="[0-9]{10}" onChange={handlechange} value={input.phone} required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900 ">Course</label>
            <select id="course" onChange={handlechange} value={input.course} className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5">
              <option value="" disabled>Select your course..</option>
              <option value="1">Web Development</option>
              <option value="2">Mobile App Development</option>
              <option value="3">Cyber Security</option>
              <option value="4">UI/UX Design</option>
              <option value="5">Cloud Computing</option>
              <option value="6">Game Development</option>
              <option value="7">Digital Marketing</option>
              <option value="8">Software Testing</option>
              <option value="9">DevOps & CI/CD</option>
              <option value="10">Blockchain & Web3</option>
              <option value="11">Programming Languages</option>
              <option value="12">DSA</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
            <input type="address" id="address" className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-violet-600 focus:border-violet-500 outline-none block w-full p-2.5 " placeholder="Add your address" required />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-violet-700 hover:underline ">terms and conditions</a>.</label>
          </div>
          <div className=" flex items-start w-full">
            <button type="submit" className="w-full text-white bg-violet-600 transition-all hover:bg-violet-700 hover:shadow-lg focus:outline-none focus:ring-0 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
          </div>
        </form>

      </section>
    </>
  )
}

export default SelectCourse;