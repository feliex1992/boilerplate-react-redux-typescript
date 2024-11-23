import { createAsyncThunk, createSlice, isRejectedWithValue, PayloadAction } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

interface AuthState {
    isAuthenticated: boolean;
    username: string | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: null,
    error: null,
};

// Async thunk to handle login logic
export const loginAsync = createAsyncThunk(
    'auth/login',
    async (
        { username, password }: { username: string, password: string }, 
        { rejectWithValue }
    ) => {
        const response = authApi.login(username, password);
        if (response.success) {
            return username;
        } else {
            return rejectWithValue(response.message);
        }
    }
);

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
            state.username = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<string>) => {
                state.isAuthenticated = true;
                state.username = action.payload;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.username = null;
                state.error = action.payload as string;
            })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;