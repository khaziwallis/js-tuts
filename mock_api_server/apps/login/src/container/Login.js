import { useContext } from "react";
import { AuthContext } from "../context";

const Login = () => {
    const { user, login, logout } = useContext(AuthContext);

    const loginHandler = () => {
        login({
            name: 'khazi'
        });
    };
    const logoutHandler = () => {
        logout();
    };

    return (
        <div>
            am from Login Page
            { user?.name ?
                (
                    <button onClick={logoutHandler}> Signout </button>
                )
                : 
                (
                    <button onClick={loginHandler}> Signin </button>
                )
            }
        </div>
    )
};

export default Login;
