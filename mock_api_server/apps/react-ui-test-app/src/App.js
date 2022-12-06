import { useEffect, useState } from "react";

const App = () => {
    const [employee, setEmployee ] = useState({
        name: '',
        age: 0
    });
    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        const result = await fetch('http://localhost:5000/employee', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        });
        if (result) {
            setEmployee(result);
        }
    }
    return (
        <div>
            <div> API Response</div>
            <hr />
            <div> Name: <strong>{ employee.name }</strong> </div>
            <div> Age: <strong>{ employee.age }</strong> </div>
            <div> Company: <strong>{ employee.company }</strong> </div>
        </div>
    )
};

export default App;