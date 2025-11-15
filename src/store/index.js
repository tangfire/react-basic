import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'
import channelReducer from './modules/channelStore'


export default configureStore({
    reducer: {
        counter: counterReducer,
        channel: channelReducer
    }
})