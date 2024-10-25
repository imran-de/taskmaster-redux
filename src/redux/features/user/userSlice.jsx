import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userName: 'Imran Ahmed',
    email: 'imran@gmail.com',
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        
    },
})

export default userSlice.reducer;