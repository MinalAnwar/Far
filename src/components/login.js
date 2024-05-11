import React from 'react';
import marketplace from './marketPlace'
const login = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full md:max-w-screen-md md:w-3/4 lg:w-1/2">
        <div className="md:w-1/2 px-6 py-8">
          <img
            className="h-64 w-full object-cover rounded-xl object-center"
            src="/Assets/images/img.jpg"
            alt="Image"
          />
        </div>
        <div className="md:w-1/2 px-6 py-8">
          <h2 className="text-green-500 800 text-3xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder='hello@gmail.com'
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg mb-4 focus:outline-none focus:shadow-outline"
              type="submit">
              Sign In
            </button>
            <br className="lg:hidden" />

            <div class="text-sm font-medium text-gray-500 dark:text-gray-700">
              Not registered? <a href="#" className="text-green-500 hover:text-green-800 hover:shadow-sm text-sm font-semibold">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
