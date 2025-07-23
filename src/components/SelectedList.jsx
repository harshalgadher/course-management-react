import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SelectedList = () => {
  const navigate = useNavigate()

  const courses = useSelector((store) => store.course.list);
  console.log(courses);


  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                SELECTED COURSE-LIST
              </h2>

              <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                <div>
                  <label
                    htmlFor="order-type"
                    className="sr-only mb-2 block text-sm font-medium text-gray-900">
                    Select order type
                  </label>
                  <select
                    id="order-type"
                    className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5  text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                    <option value="" disabled>
                      All orders
                    </option>
                    <option value="pre-order">Pre-order</option>
                    <option value="transit">In transit</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <button type="button" className="w-full rounded-lg bg-violet-600 px-5 py-2.5 hover:bg-violet-700 transition-all text-sm font-bold text-white hover:bg-primary-800 focus:outline-none focus:ring-0 sm:w-auto" onClick={()=>{navigate('/selectcourse')}}>+ Add Course</button>
              </div>
            </div>

            <div className="mt-6 flow-root sm:mt-8">
              {courses.length > 0 ? (
                courses.map((user, index) => (
                  <div
                    key={user.id || index}
                    className="divide-y divide-gray-200">
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
                          ID :-
                        </dt>
                        <dd className="mt-1.5 text-base font-semibold text-gray-900">
                          {user.id}
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
                          <a href="#" className="hover:underline">
                            {user.courseName || "#N/A"}
                          </a>
                        </dd>
                      </dl>

                      <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                        <button
                          type="button"
                          className="w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300"
                        >
                          Cancel Course
                        </button>
                        <a
                          href="#"
                          className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                        >
                          Update Course
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-center text-lg font-medium text-gray-700">
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