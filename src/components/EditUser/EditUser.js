import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import  {editUserName}  from "../../Redux/reducers";
import "./editUser.css"


export default function Edite() {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.user.token);
  const userFirstName = useSelector((state) => state.user.user.firstName);
  const userLastName = useSelector((state) => state.user.user.lastName);
  const userName = useSelector((state) => state.user.user.userName);
  

  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("Welcome back");
  const [newUserName, setNewUserName] = useState("");
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);
  const [exMark, setExMark] = useState("!");


  const editClick = () => {
    setActive((active) => !active);
    setTitle("Edit User Name")
    setFirstName("");
    setLastName("");
    setExMark("");
  };

  const returnClick = () => {
    setActive((active) => !active);
    setTitle("welcom Back")
    setFirstName(userFirstName);
    setLastName(userLastName);
    setExMark("!")
    
  };

  useEffect(() => {
    setNewUserName(userName);
  }, [userName]);

  return (
    <div >
 
      <div className="userName center">
        <form
          className="userName_form"
          id="userNameEdit"
          style={{ display: active ? "flex" : "none" }}
        >
          <div className="userName_input">
            <label htmlFor="userName" className="editName_lable">Enter New User Name</label>
            <input
              type="text"
              id="userName"
              required
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="userName_input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={userFirstName}
              onChange={(e) => e.preventDefault()}
              disabled
            />
          </div>
          <div className="userName_input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              value={userLastName}
              onChange={(e) => e.preventDefault()}
              disabled
            />
          </div>

          <div className="userNameButton_wrapper">
            <button
              className="editUserName_button"
              disabled={!newUserName}
              onClick={(e) => {
                e.preventDefault();
                dispatch(editUserName({ userName: newUserName, token: token }));
                returnClick();
              }}
            >
              Save
            </button>

            <button
              className="editUserName_button"
              onClick={(e) => {
                e.preventDefault();
                returnClick();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <button
        className="edit-button"
        style={{
          display: active ? "none" : "",
        }}
        onClick={editClick}
      >
        Edit User Name
      </button>
    </div>
  );
}
