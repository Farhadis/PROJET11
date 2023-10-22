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



















// const connectionSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(userSignin.fulfilled, (state, action) => {
//         state.user = {
//           email: action.payload.email,
//           token: action.payload.token,
//           firstName: action.payload.data.firstName,
//           lastName: action.payload.data.lastName,
//           userName: action.payload.data.userName,
//         };
//         state.status = "success";
//         state.error = "";
//       })

//       .addCase(userSignin.rejected, (state, action) => {
//         state.status = "error";
//         state.error = action.payload;
//       })

//       .addCase(userSignin.pending, (state) => {
//         state.status = "Connecting ... ";
//         state.error = "";
//       })

//       .addCase("SIGNOUT", (state) => {
//         state.user = { token: "" };
//         state.status = "idle";
//         state.error = "";
//       })

//       .addCase(editUserName.fulfilled, (state, action) => {
//         let user = state.user;
//         user.userName = action.payload.body.userName;
//         state.user = user;
//       });


//   },
// });

// export default connectionSlice.reducer;
























//36   //   .then((data) => {
      //     return data;
      //   });

//47// export const editUserName = createAsyncThunk(
//   "user/editUserName",
//   async ({ userName, token }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userName }),
//         }
//       ).then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//       });
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


      //126 .addCase(editUserName.fulfilled, (state, action) => {
      //   let user = state.user;
      //   user.userName = action.payload.body.userName;
      //   state.user = user;
      // });