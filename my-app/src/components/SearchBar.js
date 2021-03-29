import React, { Component } from "react";


class SearchBar extends Component {


    render() {
        return (
            <div className="pt-2 bg-blue-500">
                <form className="text-4xl text-white text-center font-extrabold center">
                    <input type="text" className="pr-12 m-6 text-red-400 font-extrabold shadow-2xl"></input>
                    <button type="button" className="font-extrabold p-2 shadow-2xl rounded-lg bg-red-400">  Search</button>
                </form>
            <div className="mt-4 p-4 bg-blue-900"></div>
            </div>
        )
    }        
};

export default SearchBar