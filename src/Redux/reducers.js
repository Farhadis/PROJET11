import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const localStorage = localStorage.getItem('token');
const sessionStorage = sessionStorage.getItem('token');
const token = localStorage || sessionStorage;


const initialState = {
  user: {
    email: "",
    token: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  status: "idle",
  error: "",
};

export const userSignin = createAsyncThunk(  
  "user/signin",
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          if (res.ok) {
                 
          console.log(res);

            return res.json()

          } else {
            throw new Error(" Incorrecte username or password !");
          }
        })


      console.log(rememberMe)
      
        if (rememberMe) {
          localStorage.setItem("token", response.body.token);
                      
        } else {
          sessionStorage.setItem("token", response.body.token);
        }


      return getInfo()
            
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserName = createAsyncThunk(
  "user/editUserName",
  async ({ userName }, thunkAPI) => {
    try {

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName }),
        }
      ).then((res) => {
        if (res.ok) {
          return res.json();
        }
      });
      return response;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

async function getInfo() {

  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(
        " Opps there seems to be an error!"
      );
    }
  });
  return response;
};


export const  getUserProfile = createAsyncThunk (
  "user/profile",
  async ({userName}, thunkAPI) => {
    try {
      let token = localStorage.getItem("token");  
      if (!token) {
        token = sessionStorage.getItem("token");
      }
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      console.log(userName)
      return res.json();
    } else {
      throw new Error(
        " Opps there seems to be an error!"
      );
    }
  })  
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
);


const connectionSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userSignin.fulfilled, (state, action) => {
        state.user = {
          email: action.payload.email,
          token: action.payload.token,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
          userName: action.payload.body.userName,
        };
        state.status = "success";
        state.error = "";
      })

      .addCase(userSignin.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })

      .addCase(userSignin.pending, (state) => {
        state.status = "Connecting ... ";
        state.error = "";
      })

      .addCase("SIGNOUT", (state) => {
        state.user = { token: "" };          
        state.status = "idle";
        state.error = "";
      })

      .addCase(editUserName.fulfilled, (state, action) => {
        let user = state.user;
        user.userName = action.payload.body.userName;
        state.user = user;
      })

      .addCase(getUserProfile.fulfilled, (state, action) =>{
        state.user = {
          email: "",
          token: action.payload.token,
          firstName:action.payload.body.firstName,
          lastName: action.payload.body.lastName,
          userName: action.payload.body.userName,
        };
        state.status = "success";
        state.error = "";
    })

  },
});

export default connectionSlice.reducer;

