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


























   // onClick={async(e) => {
            //   e.preventDefault();

            //   const reponse = await fetch("http://localhost:3001/api/v1/user/login", {
            //       method: "POST",
            //       headers: { "Content-Type": "application/json" },
            //       body: JSON.stringify({
            //           email: {email},
            //           password: {password},
            //         }),
            //       });

            //   const connection = await reponse.json();
            //       if (reponse.ok) {

            //       <NavLink
            //         to="/user">
            //       </NavLink>

            //       window.sessionStorage.setItem("token", connection.token);

            //       } if ((reponse.status === "404") || (reponse.status=== "401")) {
            //           alert ("Username  or  password is Incorrect !");
                      
            //       }

            // }}













// envoyer.addEventListener("click", async function(event) {

//   event.preventDefault();

//   const reponse = await fetch("http://localhost:5678/api/users/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//       email: email.value,
//       password: password.value,
//     }),
//   });

//   const connection = await reponse.json();
//   if (reponse.ok) {
//       window.sessionStorage.setItem("token", connection.token);
//       document.location.href="./index.html";
//       document.querySelector("#edit").style.display = "block";

//   }if((reponse.status == "404") || (reponse.status== "401")) {
//       document.querySelector("#error-txt").innerHTML = "Adresse mail ou Mot  de  Passe   Incorrect !";
//   }

// });
