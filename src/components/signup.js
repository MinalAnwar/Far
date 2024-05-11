import React from 'react';
import ButtonFilled from './buttonFilled';

const SignUpForm = () => {
    return (
        <div className="flex items-center justify-center  bg-zinc-100">
            <div className="w-full max-w-xl m-10 p-10 bg-white shadow-2xl rounded-xl">
                <h1 className="text-green-500 text-3xl font-bold text-center mb-6">FarmTech Signup</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-green-500 font-bold mb-2" htmlFor="username">Username</label>
                        <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-green-500 font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-green-500 font-bold mb-2" htmlFor="address">Address</label>
                        <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" required />
                    </div>
                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="firstName">First Name</label>
                            <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" required />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-2">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="lastName">Last Name</label>
                            <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="age">Age</label>
                            <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Age" required />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-2">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="phoneNumber">Phone Number</label>
                            <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="tel" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row mb-4">
                        <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-4 md:mb-0">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="cnic">CNIC</label>
                            <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cnic" type="text" placeholder="CNIC" required />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-2">
                            <label className="block text-green-500 font-bold mb-2" htmlFor="gender">Gender</label>
                            <select className="shadow-md appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-green-500 font-bold mb-2" htmlFor="dob">Date of Birth</label>
                        <input className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="dob" type="date" placeholder="Date of Birth" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-green-500 font-bold mb-2" htmlFor="accountType">Account Type</label>
                        <select className="shadow-md bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="accountType" required>
                            <option value="">Select Account Type</option>
                            <option value="farmer">Farmer</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>
                    <div className="text-center  justify-center items-center sm:flex-cols  lg:flex md:flex mb-4">
                    <ButtonFilled isFlex="flex-1" title="Signup" Margin="6" bgColor="green-500" borderColor="green-500" textColor="white" />
                        <p className="text-center mt-1 sm:mt-2 flex-2 text-gray-600">Already have an account? <a href="#" className="text-green-500 font-bold">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;
