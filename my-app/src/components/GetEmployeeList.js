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
        {
            EmployeeList.length > 0 &&
                    EmployeeList.map((employee, index) => (
                    <tr key={index}>
                        <td>
                            <img src={employee.picture.thumbnail} alt="employee profile"></img>
                        </td>
                    </tr>
                    ))
        }
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