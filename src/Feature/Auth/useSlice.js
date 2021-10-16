
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useApi from "../../api/userApi";

export const register = createAsyncThunk(
    'users/', async (payload)=>{
        const data = await useApi.register(payload);
        localStorage.setItem('user', JSON.stringify(data.name));
        return data.user;
    }
)

const useSlice = createSlice({
    name:'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers:{},
    extraReducers: {
        [register.fulfilled]: (state, action)=>{
            state.current = action.payload;
        }
    }
});
const {reducer} = useSlice;
export default reducer;