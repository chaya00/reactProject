import { createSlice } from '@reduxjs/toolkit'
import {addComment,deleteComment,fetchAllComments,getCommentById,updateComment} from './CommentApi'

const initialState={
    arrComments:[],
    status:null
}

export const CommentSlice=createSlice({
    name:'comment',
    initialState,
    extraReducers:(builder)=>{
        // 1
        builder.addCase(fetchAllComments.fulfilled,(state,action)=>{
            state.arrComments=action.payload;
            state.status="fulfilled";
        })
        .addCase(fetchAllComments.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(fetchAllComments.rejected,(state,action)=>{
            state.status="failed"
        })
        //2
        .addCase(getCommentById.fulfilled,(state,action)=>{
            state.status="fulfilled";
        })
        .addCase(getCommentById.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(getCommentById.rejected,(state,action)=>{
            state.status="rejected";
        })
        //3
        .addCase(addComment.fulfilled,(state,action)=>{
            state.status="fulfilled";
        })
        .addCase(addComment.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(addComment.rejected,(state,action)=>{
            state.status="rejected";
        })
        //4
        .addCase(deleteComment.fulfilled,(state,action)=>{
            state.status="fulfilled";
        })
        .addCase(deleteComment.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(deleteComment.rejected,(state,action)=>{
            state.status="rejected";
        })
        //5
        .addCase(updateComment.fulfilled,(state,action)=>{
            state.status="fulfilled";
        })
        .addCase(updateComment.pending,(state,action)=>{
            state.status="pending";
        })
        .addCase(updateComment.rejected,(state,action)=>{
            state.status="rejected";
        })
    }
})

export default CommentSlice.reducer;
