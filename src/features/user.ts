import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserServiceSensitiveResponse } from '../services/UserService';
import { RootState } from '../store';
import wretch from 'wretch';

export type UserState = UserServiceSensitiveResponse;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        return await wretch('/api/user').get().json() as UserState;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: null as UserState,
    reducers: {
        updateUser: (state, action: PayloadAction<UserState>) => action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const { updateUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
export const selectUserPronouns = (state: RootState) => selectUser(state).pronouns;

export const userReducer = userSlice.reducer;