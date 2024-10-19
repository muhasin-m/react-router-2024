import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 | Page Not Found!</h2>

      <br />
      <button onClick={() => navigate("/")}>Got to homepage</button>
    </div>
  );
};
export default NotFound;
