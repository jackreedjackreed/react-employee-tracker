import React from "react"

function Table(props) {
    // console.log("here are the props " + props.data.length)
    console.log(props.fakeData);

        return( 

            <div className="bg-blue-400 p-5">

            
            <div className="pb-8 ml-24 mr-24 bg-blue-400">
                <table className="table-auto">
                <thead className="bg-blue-300 rounded-xl ">
                <tr className="text-gray-100 font-extrabold rounded-xl text-4xl">
                    <th className="w-1/5 ...">Profile</th>
                    <th className="w-1/5 ...">Name</th>
                    <th className="w-1/5 ...">Address</th>
                    <th className="w-1/5 ...">Phone</th>
                    <th className="w-1/5 ...">Email</th>
                </tr>
                </thead>
                <tbody className="text-white font-extrabold">
                    {/* {props.employees.length > 0 &&
                    props.employees.map((index) => (
                    <tr key={index}>
                        <td>
                            <img src={index.picture.thumbnail} alt="employee profile"></img>
                        </td>
                    </tr>
                    ))} */}
                <tr>
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                <tr className="bg-blue-200">
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
                <tr className="bg-blue-200">
                    <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                    <td>Adam</td>
                    <td>112</td>
                    <td>Adam</td>
                    <td>858</td>
                </tr>
                </tbody>
            </table>
            <div className="p-96"></div>
         </div>
        </div>
        )
}

export default Table