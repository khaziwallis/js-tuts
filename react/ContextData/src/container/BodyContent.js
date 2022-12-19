import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const BodyContent = () => {
  const {user} = useContext(UserContext);

  return (
    <div>
      am from BodyContent {user.name}
    </div>
  )
};

export default BodyContent;