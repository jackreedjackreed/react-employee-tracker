import React, { useEffect, useState } from 'react';
import API from '../utils/API'


function GetEmployeeList() {
    const [EmployeeInfo, setEmployeeInfo] = useState({
        image: "",
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
    })

    useEffect(() => {
        API.search()
            .then(res => {
                console.log("employees retrieved: " + res)
                setEmployeeInfo({
                    image: res.data.results[0].picture.thumbnail,
                    firstName: res.data.results[0].name.first,
                    lastName: res.data.results[0].name.last,
                    address: [res.data.results[0].location.street.number, res.data.results[0].location.street.name],
                    phone: res.data.results[0].phone,
                    email: res.data.results[0].email,
                });
                console.log(EmployeeInfo)
            })
            .catch(err => console.log(err));
    }, []);

    return ( 
        <div>
            <p>
                Hey
            </p>
        </div>
    )
}

export default GetEmployeeList