import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteCourse } from "../features/course/courseSlice";

const SelectedList = () => {
  const navigate = useNavigate()

  const courses = useSelector((store) => store.course.list);
  // console.log(courses);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  }

  const courseMap = (courseID) => {
    switch (courseID) {
      case "1":
        return " Web Development";
      case "2":
        return "Mobile App Development";
      case "3":
        return "Cyber Security";
      case "4":
        return "UI/UX Design";
      case "5":
        return "Game Development";
      case "6":
        return "Cloud Computing";
      case "7":
        return "Digital Marketing";
      case "8":
        return "Software Testing";
      case "9":
        return "DevOps & CI/CD";
      case "10":
        return "Blockchain & Web3";
      case "11":
        return "Programming Languages (C, C++, Java, Python)";
      case "12":
        return "DSA"
    }
  };

  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between pb-6 border-b-2 border-violet-600">
              <h2 className="text-xl font-bold text-violet-600 sm:text-2xl ">
                📃SELECTED COURSE-LIST
              </h2>

              <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">

                <button type="button" className="w-full rounded-lg bg-violet-600 px-5 py-2.5 hover:bg-violet-700 transition-all text-sm font-bold text-white hover:bg-primary-800 focus:outline-none focus:ring-0 sm:w-auto" onClick={() => { navigate('/selectcourse') }}>+ Add Course</button>
              </div>
            </div>

            <div className=" flow-root sm:mt-2">
              {courses.length > 0 ? (
                courses.map((user) => (
                  <div
                    key={user.id}
                    className="divide-y divide-gray-200  border-y mt-1 border-violet-600">
                    <div className="flex flex-wrap items-center gap-y-4 py-6">
                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500">
                          Name :-
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900">
                          <a href="#" className="hover:underline">
                            {user.name}
                          </a>
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500">
                          Mail :-
                        </dt>
                        <dd className="mt-1.5 text-base font-bold text-emerald-600 pe-4">
                          {user.email}
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500">
                          Phone No :-
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900">
                          {user.phone || "N/A"}
                        </dd>
                      </dl>

                      <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                        <dt className="text-base font-medium text-gray-500">
                          Course :-
                        </dt>
                        <dd className="mt-1.5 text-base font-bold text-violet-600">
                          <dd className="hover:underline cursor-pointer">
                            {courseMap(user.course)} 
                          </dd>
                        </dd>
                      </dl>

                      <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                        <Link to={`/editecourse/${user.id}`} className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
                          Update Course
                        </Link>
                        <button
                          type="button"
                          className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300"
                          onClick={() => handleDelete(user.id)}>
                          Cancel Course
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-center text-lg font-medium text-gray-700 w-full p-5 rounded-lg border-2">
                  No Data Found
                </h1>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SelectedList;