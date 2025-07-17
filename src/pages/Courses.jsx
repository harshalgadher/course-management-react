const Courses = () => {
    return (
        <div>
            <div>
                <section className="py-8 antialiased md:pb-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
                            <h2 className="text-gray-900 text-4xl font-extrabold">Courses by category</h2>
                        </div>
                        <div className="grid gap-6  lg:grid-cols-3">
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Web Development</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.872 9.687 20 6.56 17.44 4 4 17.44 6.56 20 16.873 9.687Zm0 0-2.56-2.56M6 7v2m0 0v2m0-2H4m2 0h2m7 7v2m0 0v2m0-2h-2m2 0h2M8 4h.01v.01H8V4Zm2 2h.01v.01H10V6Zm2-2h.01v.01H12V4Zm8 8h.01v.01H20V12Zm-2 2h.01v.01H18V14Zm2 2h.01v.01H20V16Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Mobile App Development</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Cyber Security</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">UI/UX Design</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Cloud Computing</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Game Development</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Digital Marketing</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Software Testing</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">DevOps & CI/CD</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Blockchain & Web3</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Programming Languages (C, C++, Java, Python)</span>
                            </div>
                            <div className="flex cursor-pointer items-center  rounded-lg border border-black bg-white px-4 py-5 hover:bg-violet-500 transition-all">
                                <svg className="me-2 h-4 w-4 shrink-0 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
                                </svg>
                                <span className="text-sm  text-gray-900 font-bold ">Cyber Security</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Courses;