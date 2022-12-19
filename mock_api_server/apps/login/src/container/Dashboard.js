import { Outlet, Navigate } from "react-router-dom";
import Link from '@mui/material/Link';
import { useContext } from "react";
import { AuthContext } from "../context";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    if (!user.name) {
        return (
            <Navigate
                to={{
                    pathname: "/login",
                }}
            />
        );
    }
    return (
        <div>
            <header>Application Title</header>
            <Link underline='hover' href="/home">Home</Link> &nbsp;
            <Link underline='hover' href="/profile">Profile</Link> &nbsp;
            <Link underline='hover' href="/about">About</Link>
            <div>
                <Outlet />
            </div>
            <footer className="footer">
                Application Footer
            </footer>
        </div>
    )
    
};

export default Dashboard;
