import React, { Component } from "react"

class Table extends Component {

    render() {
        return( 
            <div class="bg-blue-400 p-5">

            
            <div class="pb-8 ml-24 mr-24 bg-blue-400">
                <table class="table-auto">
                <thead class="bg-blue-300 rounded-xl ">
                <tr class="text-gray-100 font-extrabold rounded-xl text-4xl">
                    <th class="w-1/5 ...">Profile</th>
                    <th class="w-1/5 ...">Name</th>
                    <th class="w-1/5 ...">Address</th>
                    <th class="w-1/5 ...">Phone</th>
                    <th class="w-1/5 ...">Email</th>
                </tr>
                </thead>
                <tbody class="text-white font-extrabold">
                <tr>
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr class="bg-blue-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr>
                    <td>Intro to JavaScript</td>
                    <td>Chris</td>
                    <td>1,280</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr class="bg-blue-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                </tbody>
            </table>
            <div class="p-96"></div>
         </div>
        </div>
        )
    }
}

export default Table