import React from 'react';
import { Link } from 'react-router-dom';

export function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <img src="/logo.png" alt="Company Logo" className="w-32 mb-6" />
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Sign Up
                        </button>
                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                className="flex items-center justify-center w-full py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
                            >
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google icon" className="w-5 h-5 mr-2" />
                                Sign Up with Google
                            </button>
                        </div>
                        <p className="mt-4 text-center">
                            Already have an account?{' '}
                            <Link to="/signin" className="text-blue-500 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}