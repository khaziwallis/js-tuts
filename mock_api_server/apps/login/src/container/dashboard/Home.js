import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";

const Home = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div>
            Home Page
            <div>
                Select Topics
                <ul>
                    <li>
                        <Link to="servers">
                            List All Servers
                        </Link>
                    </li>
                    <li>
                        <Link to="applications">
                            List All Application
                        </Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </div>
    )
};

export default Home;
