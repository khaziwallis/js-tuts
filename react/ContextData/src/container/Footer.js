import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      am from Footer {user.name}
    </div>
  )
};

export default Footer;