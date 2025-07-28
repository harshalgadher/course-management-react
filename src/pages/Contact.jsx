import { Clock, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-violet-500 to-violet-800 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Have questions about our courses? We're here to help you on your learning journey.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-violet-600 mb-6">Get in Touch</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                We're committed to providing excellent support for all our students. Reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                                        <Mail className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                                        <p className="text-gray-600">support@coursemanagement.com</p>
                                        <p className="text-gray-600">info@coursemanagement.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-3 rounded-full mr-4">
                                        <Phone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                                        <MapPin className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                                        <p className="text-gray-600">123 Education Street</p>
                                        <p className="text-gray-600">Learning City, LC 12345</p>
                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    </div>

                    <div className="space-y-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-violet-500 to-violet-700 rounded-lg p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                                <p className="text-blue-100">Our support team is always ready to help you with any questions.</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                                <p className="text-green-100">Learn from industry professionals with years of experience.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg -mt-14 shadow-md overflow-hidden">
                            <div className="bg-gray-200 h-72 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                                    <p className="text-gray-500">Interactive Map</p>
                                    <p className="text-sm text-gray-400">Find us at our main campus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact