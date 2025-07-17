import { Link, useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="bg-white border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center align-items-center justify-between mx-auto p-4">
                    <div href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/logo.jpg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-bold underline whitespace-nowrap text-violet-600">Course management</span>
                    </div>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <Link to={'/'} >
                                <a href="#" className="block py-2 px-3  align-items-center rounded-sm md:bg-transparent md:p-0 hover:text-violet-600 hover:underline font-bold transition-all"><i className="ri-home-4-fill"></i> Home</a>
                            </Link>
                            <Link to={'courses'}>
                                <a href="#" className="block py-2 px-3  align-items-center rounded-sm md:bg-transparent md:p-0 hover:text-violet-600 hover:underline font-bold transition-all"><i className="ri-book-open-fill"></i> Courses</a>
                            </Link>
                            <Link>
                                <a href="#" className="block py-2 px-3 align-items-center  rounded-sm md:bg-transparent md:p-0 hover:text-violet-600 hover:underline font-bold transition-all"><i class="ri-contacts-fill"></i> Contact</a>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <button type="button" onClick={() => navigate('/SelactCourse')} className="inline-flex items-center font-bold py-2 px-4 justify-center text-sm text-violet-600 rounded-lg  hover:bg-violet-500 hover:text-white transition-all focus:outline-none border-2 border-violet-500 shadow-md">
                            <span>START LEARNING</span>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header