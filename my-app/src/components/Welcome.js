import React, {Component} from "react";
// import API from "../utils/API";


  


class Welcome extends Component {
        render() {
            return (
                <div>
                    <div class="p-10 bg-blue-500">
                        <main class="mt-10 w-screen mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 shadow-2xl">
                            <div class="sm:text-center lg:text-center">
                                <h1 class="text-4xl mt-15 tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span class="block text-white xl:inline">Welcome to </span>
                                    <span class="block text-red-300 xl:inline">SearchFakePeople</span>
                                 </h1>
                            </div>
                        </main>
                        
                    </div>
                </div>
            )
        }        
    };

export default Welcome