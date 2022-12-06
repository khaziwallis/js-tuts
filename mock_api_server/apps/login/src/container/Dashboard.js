import { Outlet } from "react-router-dom";
import Link from '@mui/material/Link';
import { useState } from "react";

const Dashboard = () => {
    let auth = {};//useAuth();
    auth.user = {};

    return (
        auth.user ?
        (
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
        :
        <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
        />
    )
};

export default Dashboard;
