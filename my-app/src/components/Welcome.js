import React, {Component} from "react";
// import API from "../utils/API";


  


class Welcome extends Component {
        render() {
            return (
                <div>
                    <div class="p-6 bg-gradient-to-r from-red-300 to-red-300"></div>
                    <div class="p-6 bg-blue-500">
                        <main class="mt-10 mb-10 p-12 w-screen mx-auto max-w-7xl px-4 shadow-2xl bg-blue-400">
                            <div class="sm:text-center lg:text-center">
                                <h1 class="text-4xl mt-15 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block text-white xl:inline">Welcome to </span>
                                    <span class="block text-red-300 xl:inline">SearchFakePeople</span>
                                 </h1>
                            </div>
                            <br/>
                            <p class="text-3xl text-center font-bold text-white">Use the space below to search for employees</p>
                        </main>
                        
                    </div>
                </div>
            )
        }        
    };

export default Welcome