import { createSlice } from "@reduxjs/toolkit"



const userReducer = createSlice({
    name: 'user',
    initialState: {
       
        event: []

    },
    reducers: {
        addEvent(state, action) {
            state.event.push({
                nameEvent: action.payload.nameEvent,
                descriptionEvent: action.payload.descriptionEvent,
                dateEvent: action.payload.dateEvent,
            })
        },
        EditEventRed(state, action) {

            state.event[action.payload.index] = {
                nameEvent: action.payload.nameEvent,
                descriptionEvent: action.payload.descriptionEvent,
                dateEvent: state.event[action.payload.index].dateEvent,
            }
        },
        deleteEvent(state, action) {

            state.event.splice(action.payload.index, 1)

        },
     

    }
})
export const { addEvent, EditEventRed, deleteEvent } = userReducer.actions
export default userReducer.reducer