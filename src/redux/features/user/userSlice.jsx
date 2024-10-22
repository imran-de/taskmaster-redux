import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: 'Imran Ahmed',
    email: 'imran@gmail.com',
    userTask: [],
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        
    },
})

export default userSlice.reducer;