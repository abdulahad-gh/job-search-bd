import apiSlice from "../api/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints:builder => ({
        saveUser:builder.mutation({
            query:(user) =>({
                url:'user',
                method:'POST',
                body:user
            })
        })
    })
})

export const {useSaveUserMutation} = authApi