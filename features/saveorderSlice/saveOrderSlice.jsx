import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SaveorderAPI from "../../src/API/SaveOrder";
export const getSaveOrder = createAsyncThunk(
    "saveorder/getSaveOrder",
    async () => {
        const { data: saveorder } = await SaveorderAPI.getAll()
        return saveorder
    }
)

// export const addSaveOrder=createAsyncThunk(
//     "saveorder/addSaveOrder",
//     async (data)=>{
//         SaveorderAPI.add(data)
//     }
// )
const saveorderSlice = createSlice({
    name: 'saveorder',
    initialState: {
        value: []
    },
    reducers: {
        addSaveorder(state, action) {
            console.log(action.payload)
            state.value.push(action.payload)
        },
        updateSaveorder(state, action) {
            console.log(action.payload)
            // state.value == action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSaveOrder.fulfilled, (state, action) => {
            state.value = action.payload
        })
        // builder.addCase(addSaveorder.fulfilled, (state, action) => {
        //     state.value = action.payload
        // })
    }
})
export const {updateSaveorder,addSaveorder} =saveorderSlice.actions
export default saveorderSlice.reducer