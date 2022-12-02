import API_URL from "../constants/api";
// https://azam-test-app.free.beeceptor.com/employeeList
// https://beeceptor.com/console/azam-test-app
const employeeList = () => {
    return fetch(`${API_URL.BASE_URL}/employeeList`).then((response) => {
        return Promise.resolve(response);
    }, (error) => {
        console.log('error', error);
        return Promise.reject(error);
    });
};

const employee = (empid) => {
    return fetch(`${API_URL.BASE_URL}/employee`).then((response) => {
        return response;
    }, (error) => {
        console.log('error', error);
    });
};
// https://api.github.com/users/{userName}
const getGithubUser = async (userName) => {
    const response = await fetch(`${API_URL.GITHUB_URL}/users/${userName}`);
    const jsonData = await response.json();
    return jsonData;
}

export default {
    getGithubUser,
    employee,
    employeeList
};
