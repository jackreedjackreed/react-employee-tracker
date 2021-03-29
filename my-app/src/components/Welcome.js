import React, { Component } from "react";
// import API from "../utils/API";

class Welcome extends Component {
        render() {
            return (
                <div>
                    
                    <div className="pt-24 pb-1 bg-blue-500">
                        <main className="mt-10 mb-6 p-12 w-screen mx-auto max-w-7xl px-4 shadow-2xl bg-blue-400 rounded-lg">
                            <div className="sm:text-center lg:text-center">
                                <h1 className="text-4xl mt-15 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block text-white xl:inline">Welcome to </span>
                                    <span className="block text-red-300 xl:inline">SearchFakePeople</span>
                                 </h1>
                            </div>
                            <br/>
                            <p className="text-3xl text-center font-bold text-white">Use the space below to search for fake employees</p>
                        </main>
                        
                    </div>
                </div>
            )
        }        
    };

export default Welcome