import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import InstClassCard from "./InstCard";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import styled from "styled-components";

//PATH TO THIS COMPONENT IS '/inst-dash'

const InstDash = (props) => {
  console.log("PROPS:", props);
  const { instClasses, setInstClasses } = props;
  const { push } = useHistory();
  // const { id } = useParams();

  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
  };

  const addClass = (e) => {
    push("/add-class");
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
        <Link onClick={logout}>Log-Out</Link>
        <Link onClick={addClass}>Add New Class</Link>
        <h3>Avaliable Classes</h3>
      </div>
      <div className="class-container">
        {instClasses.map((data, index) => {
          return (
            <div>
              <ClassLink to={`/instructor-class/${instClasses[index].id}`}>
                <InstClassCard data={data} key={instClasses[index].id} />
              </ClassLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ClassLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default InstDash;
