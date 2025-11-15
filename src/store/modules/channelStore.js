import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const channelStore  = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannels: (state,action) => {
            // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
            // 并不是真正的改变状态值，因为它使用了 Immer 库
            // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
            // 不可变的状态
            state.channelList = action.payload
        },
    }
})

// 异步请求部分

const {setChannels} = channelStore.actions;

const fetchChannelList = () => {
    return async (dispatch)=>{
        const res =  await axios.get('http://geek.itheima.net/v1_0/channels')
        dispatch(setChannels(res.data.data.channels))
    }
}

export {fetchChannelList}

export default channelStore.reducer