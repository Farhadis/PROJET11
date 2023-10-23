import "./form.css";
import { useState, useEffect } from "react";
import {userSignin} from "../../Redux/reducers"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {    
    if (status === "success") {
      navigate("/profile")
    
    dispatch(userSignin());
    }}, [dispatch, navigate, status]
  );

  return (
    <div>
      <form>
        <div className="input-wrapper">
          <label htmlFor="userName">Username</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {status === "error" && (
        <div className="errorMessage" id="errorText">
          {error}
        </div>
      )}


        <div className="input-remember">
          <input 
          type="checkbox" 
          id="remember-me" 
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        
          <button           
            className="sign-in-button"
            onClick={(e) => {
              e.preventDefault();            
              dispatch(userSignin({ email: email, password: password, rememberMe: rememberMe }));
            }}
          >
            Sign In
          </button>
       
      </form>
    </div>
  );
};

export default Form;






















