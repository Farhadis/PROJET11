import { createAsyncThunk } from "@reduxjs/toolkit";




export const userSignin = createAsyncThunk(
  
  "user/login",

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

      const user = await userInfo(response.body.token);
      return { email: email, data: user.body, token: response.body.token };
            
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserName = createAsyncThunk(
  "user/editUserName",
  async ({ userName, token }, thunkAPI) => {
    try {
      const res = await fetch(
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
      return res;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


async function userInfo(token) {
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
}



























