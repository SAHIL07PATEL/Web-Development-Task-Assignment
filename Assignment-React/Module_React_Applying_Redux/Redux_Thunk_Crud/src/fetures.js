import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create User 
export const createUser = createAsyncThunk("userDetail", async (data, { rejectWithValue }) => {
  const response = await fetch("https://648d44112de8d0ea11e7b1f3.mockapi.io/crud", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  try {

    const result = await response.json();
    return result;

  } catch (error) {
    return rejectWithValue(error)
  }
})

// show user 
export const showUser = createAsyncThunk("userShow", async (args, { rejectWithValue }) => {
  const response = await fetch("https://648d44112de8d0ea11e7b1f3.mockapi.io/crud", {
    method: "GET",
    headers: {
      'content-type': 'application/json'
    },
  })

  try {
    const result = response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})


// Delete user 
export const deleteUser = createAsyncThunk("deleteUser", async (userid, { rejectWithValue }) => {
  const response = await fetch(`https://648d44112de8d0ea11e7b1f3.mockapi.io/crud/${userid}`, {
    method: "DELETE",
    headers: {
      'content-type': 'application/json'
    },
  })

  try {
    const result = response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})

// Delete user 
export const editUser = createAsyncThunk("editUser", async (data, { rejectWithValue }) => {
  const response = await fetch(`https://648d44112de8d0ea11e7b1f3.mockapi.io/crud/${data.id}`, {
    method: "PUT",
    headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify(data)
  })

  try {
    const result = response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})


const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Something went wrong';
      });


    builder
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;

        const { id } = action.payload;
        // console.log("Delete User", id);

        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id)
          alert("Deleted Successfully")
        }

      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase( editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele)=>ele.id  === action.payload.id ? action.payload : ele)
        alert("Update Successfully...")
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },

})

export default userDetail.reducer;