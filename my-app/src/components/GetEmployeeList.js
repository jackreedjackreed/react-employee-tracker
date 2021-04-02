import React, { useEffect, useState } from 'react';
import API from '../utils/API'
import Table from './Table'


function GetEmployeeList() {
    const hello = "hello"
    const [EmployeeList, setEmployeeList] = useState([]);

    useEffect(() => {

        console.log("used effect on GetEmployeeList")

       if (EmployeeList.length === 0) API.search()
            .then(res => {
                // console.log("employees retrieved: " + res.data.results[0].picture.thumbnail);
                let result = res.data.results
                console.log(result)
                setEmployeeList(result)
                // console.log(EmployeeList)
                console.log("above is the employee list logged from GetEmployeeList")
                // console.log(EmployeeList.result[0].gender)

                // setEmployeeInfo({
                    // image: res.data.results[0].picture.thumbnail,
                    // firstName: res.data.results[0].name.first,
                    // lastName: res.data.results[0].name.last,
                    // address: [res.data.results[0].location.street.number, res.data.results[0].location.street.name],
                    // phone: res.data.results[0].phone,
                    // email: res.data.results[0].email,
            // })
                // console.log(EmployeeInfo)
            })
            .catch(err => console.log(err));
    }, [EmployeeList]);
    console.log("employee list here " + EmployeeList)
    return ( 
        <>

        {/* {EmployeeList.length > 0 &&
            <Table fakeData={hello} employees={EmployeeList}/> */}

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
                    {
            EmployeeList.length > 0 &&
                    EmployeeList.map((employee, index) => (
                    <tr key={index}>
                        <td>
                            <img src={employee.picture.thumbnail} alt="employee profile"></img>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                    </tr>
                    ))
        }
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
        
        </>
    )
}

export default GetEmployeeList


// const [EmployeeInfo, setEmployeeInfo] = useState({
    //     image: "",
    //     firstName: "",
    //     lastName: "",
    //     address: "",
    //     phone: "",
    //     email: "",
    // })


      //     const search = async () => {
    //         const res = await API.search();
    //     console.log(res.data.results);
    //     setEmployeeList(res.data.results)
    //     console.log("here is the employee list " + EmployeeList);

    //     };
    //     search()
    //  }, []);