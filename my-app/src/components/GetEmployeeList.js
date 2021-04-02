import React, { useEffect, useState } from 'react';
import API from '../utils/API'



function GetEmployeeList() {
    const hello = "hello"
    const [EmployeeList, setEmployeeList] = useState([]);

    useEffect(() => {

        console.log("used effect on GetEmployeeList")

       if (EmployeeList.length === 0) API.search()
            .then(res => {
      
                let result = res.data.results
                setEmployeeList(result)
        
            })
            .catch(err => console.log(err));
    }, [EmployeeList]);
    console.log("employee list here " + EmployeeList)
    return ( 
        <>

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
                <tbody className="text-white font-extrabold text-center justify-center">
                    {
            EmployeeList.length > 0 &&
                    EmployeeList.map((employee, index) => (
                    <tr>
                        <td className="justify-center">
                            <img  src={employee.picture.thumbnail} alt="employee profile"></img>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td>
                            {employee.location.street.number}{" "}{employee.location.street.name}, {employee.location.city}
                        </td>
                        <td>
                            {employee.email}
                        </td>
                        <td>
                            {employee.phone}
                        </td>
                    </tr>
                    ))
        }
                </tbody>
            </table>
            <div className="mt-4 p-8 bg-blue-800"></div>
         </div>
        </div>
        
        </>
    )
}

export default GetEmployeeList
