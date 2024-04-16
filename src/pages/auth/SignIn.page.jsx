import React, {useState} from "react";
import {CgLayoutGrid} from "react-icons/cg";
import {IoLogoGoogle} from "react-icons/io";
import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data", formData);
    };
    return (
        <div>
            <div className="signIn-background">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-sm mx-auto mt-40 rounded-lg bg-gray-50 shadow-xl border border-gray-100 p-8 text-gray-500 font-poppins"
                >
                    <div className="text-white w-full -mt-12 py-5 focus:shadow-inner bg-blue-500 hover:bg-blue-800  font-light rounded-lg text-sm px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <h1 className="font-bold text-xl font-montserrat text-white mt-5">Sign in</h1>
                        <div className="flex items-center justify-center gap-5 mt-5 mb-5">
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 48 48"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                            >
                                <defs></defs>
                                <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#ffffff">
                                        <path
                                            d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                                            id="Facebook"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="20" fill="#ffffff" />
                                <path
                                    d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
                                    fill="#3b82f6"
                                />
                            </svg>
                            <p>
                                <IoLogoGoogle className="w-6 h-6" />
                            </p>
                        </div>
                    </div>
                    <div className="mb-5 mt-8">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                            minLength={8}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="flex items-start mb-5 mt-8">
                        <label className="inline-flex items-center mb-5 cursor-pointer">
                            <input type="checkbox" value={true} className="sr-only peer" />
                            <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                            <span className="ms-3 text-sm font-medium font-montserrat text-gray-900 dark:text-gray-300">
                                Remember Me
                            </span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="text-white font-montserrat uppercase w-full font-semibold focus:shadow-inner bg-blue-500 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sign In
                    </button>
                    <div className="font-montserrat text-sm text-gray-500 dark:text-gray-300 mt-7 mb-3">
                        Don't have an account?
                       <Link to={"/sign_up"}>
                       <span className="text-blue-700 font-montserrat hover:underline dark:text-blue-500 ms-1">
                            Sign Up
                        </span>
                       </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
