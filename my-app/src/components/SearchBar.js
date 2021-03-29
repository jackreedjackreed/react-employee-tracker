import React, { Component } from "react";


class SearchBar extends Component {


    render() {
        return (
            <div class="pt-6 bg-gray-300">
                <form class="text-4xl text-white pb-4 text-center font-extrabold center">
                    <input type="text" class="pr-12 m-6 text-red-400 font-extrabold"></input>
                    <button type="button" class="font-extrabold p-2 rounded-lg bg-red-400">  Search</button>
                </form>
            <div class="mt-1 p-1 bg-gray-600"></div>
            </div>
        )
    }        
};

export default SearchBar