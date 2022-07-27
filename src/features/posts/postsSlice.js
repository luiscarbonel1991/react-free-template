const { createSlice } = require("@reduxjs/toolkit")

const initialState = [
    { id: 1, title: 'First post', content: 'Hello my first post'},
    { id: 2, title: 'Second post', content: 'Hello my second post'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer