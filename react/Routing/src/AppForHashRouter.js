import { Link, NavLink, Outlet } from "react-router-dom";

const AppForHashRouter = () => {
    let activeStyle = {
        textDecoration: "underline",
        color: 'green'
    };
    return (
        <div>
            <header>
                <div>
                    my First React App
                </div>
                <nav>
                    <ul>
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='contact'>Contact</Link></li>
                        <li>
                            <NavLink
                                to="home"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="contact"
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet />
        </div>
    )
};

export default AppForHashRouter;