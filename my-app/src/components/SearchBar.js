import React, { Component } from "react";


class SearchBar extends Component {


    render() {
        return (
            <div class="pt-2 bg-blue-500">
                <form class="text-4xl text-white text-center font-extrabold center">
                    <input type="text" class="pr-12 m-6 text-red-400 font-extrabold shadow-2xl"></input>
                    <button type="button" class="font-extrabold p-2 shadow-2xl rounded-lg bg-red-400">  Search</button>
                </form>
            <div class="mt-4 p-4 bg-blue-900"></div>
            </div>
        )
    }        
};

export default SearchBar