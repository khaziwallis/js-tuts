import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const {user, setUser} = useContext(UserContext);

  setUser({
    name: 'khazi'
  });
  return (
    <div>
      am from header {user.name}
    </div>
  )
};

export default Header;