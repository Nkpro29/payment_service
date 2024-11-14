import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials) => {
    const { email, password } = credentials;
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      // credentials: 'include'
    });
    const data = await response.json();

    // Check if the response contains the user data or throw an error
    if (response.ok) {
      return data; // This will be available in the action payload
    } else {
      throw new Error(data.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
