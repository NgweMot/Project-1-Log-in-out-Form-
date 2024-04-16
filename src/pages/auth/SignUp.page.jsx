import React, {useState} from "react";
import { Link } from "react-router-dom";


const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const matchPassword = () => {
            let password = formData.password;
            let c_password = formData.password_confirmation;
            if (password !== c_password) {
                alert("Password do not match. Please retype your password.");
                return false;
            } else {
                console.log("form Data Sign up", formData);
            }
        };
        matchPassword();
    };
    return (
        <div className="signUp-background lg:mb-[400px] ">
            <form
                onSubmit={handleSubmit}
                className="max-w-sm mx-auto mt-20 rounded-lg bg-white p-8 text-gray-500 font-poppins"
            >
                <div className="text-white w-full -mt-12 focus:shadow-inner py-5 bg-blue-500 hover:bg-blue-800  font-light rounded-lg text-sm px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <h1 className="font-bold text-xl text-white mt-5 font-montserrat">Join us today</h1>
                    <div className="justify-center mt-5 mb-5">
                        <p className="text-xs font-montserrat">Enter your email and password to register</p>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="name" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className=" border-b-2 border-0 focus:border-b-2 border-gray-300 focus:ring-0  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white"
                        placeholder=""
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="email" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className=" border-b-2 border-0 focus:border-b-2 border-gray-300 focus:ring-0  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white"
                        placeholder=""
                        required
                    />
                </div>
                <div className="mt-3">
                    <label htmlFor="password" className="block mb-0 text-sm font-medium text-gray-900 dark:text-white">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className=" border-b-2 border-0 focus:border-b-2 border-gray-300 focus:ring-0  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white"
                        placeholder=""
                        minLength={8}
                        required
                    />
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="password_confirmation"
                        className="block mb-0 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password Confirmation
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleInputChange}
                        minLength={8}
                        className=" border-b-2 border-0 focus:border-b-2 border-gray-300 focus:ring-0  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500  dark:text-white"
                        placeholder=""
                        required
                    />
                </div>
                <div className="flex items-start mb-5 mt-8">
                    <>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value={true}
                                    className="w-4 h-4 focus:ring-0 border border-gray-300 rounded bg-gray-50  dark:bg-gray-600 dark:border-gray-500  "
                                    required
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                I agree the
                            </label>
                        </div>
                        <a href="#" className="text-sm ms-1 text-blue-700 hover:underline dark:text-blue-500">
                            Terms and Conditions
                        </a>
                    </>
                </div>
                <button
                    type="submit"
                    className="text-white font-montserrat font-semibold uppercase w-full focus:shadow-inner bg-blue-500 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sign Up
                </button>
                <div className="font-montserrat text-gray-500 dark:text-gray-300 mt-5 mb-2">
                    Already have an account?
                    <Link to={"/"}>
                        <span className="text-blue-700 hover:underline dark:text-blue-500 ms-1">Sign In</span>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;
