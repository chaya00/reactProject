
import DialogContent from '@mui/material/DialogContent';
import * as React from 'react'
const Comment = ({ comment }) => {
    return (
        <>
                <DialogContent>
                    {console.log(comment.id)}
                    <h3>{comment.date}</h3>
                    <h3>{comment.content}</h3>
                </DialogContent>
        </>
    )
}
export default Comment;

// public int ProductId { get; set; }
// public Product Product { get; set; }
// public int UserId { get; set; }
// public User User { get; set; }