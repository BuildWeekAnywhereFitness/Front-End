import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import InstClassCard from "./InstCard";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

//PATH TO THIS COMPONENT IS '/inst-dash'

const InstructorDash = (props) => {
  const { instClasses, savedClasses, setInstClasses, setSavedClasses } = props;
  const { push } = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  const getInstClass = () => {
    axiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        console.log("res in my Instructor Get:", res);
        setInstClasses(res.data);
      })
      .catch((err) => {
        console.log("error in Instructor Get:", err.message);
      });
  };

  useEffect(() => {
    getInstClass();
  }, []);

  return (
    <div className="instructor-container">
      <h1>Welcome to Your Instructor DashBoard</h1>
      <div className="top-container">
        <Link to="/update-class:id">Update This Class</Link>
        <Link>Delete This Class</Link>
        <Link onClick={logout}>Log-Out</Link>
        <h3>Avaliable Classes</h3>
      </div>
      <div className="class-container">
        {/* {instClasses.map((data, index) => {
          return (
            <div>
              <Link to={`/instructor-class/${index}`}></Link>
              <InstClassCard data={data} key={index} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default InstructorDash;
