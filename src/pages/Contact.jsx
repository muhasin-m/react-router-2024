import { useLocation, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currenPath = location.pathname;
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="contact-buttons">
        {currenPath !== "/contact/info" && (
          <button onClick={() => navigate("info")}>Contact Info</button>
        )}
        {currenPath !== "/contact/form" && (
          <button onClick={() => navigate("form")}>Contact Form</button>
        )}

        {/* <button onClick={() => navigate("info")}>Contact Info</button>
        <button onClick={() => navigate("form")}>Contact Form</button> */}
      </div>
    </div>
  );
};
export default Contact;
