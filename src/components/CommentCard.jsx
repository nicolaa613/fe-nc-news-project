const CommentCard = ({comment}) => {
    return (
        <div className="comment">
            <p>{comment.author} | {comment.created_at}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default CommentCard
