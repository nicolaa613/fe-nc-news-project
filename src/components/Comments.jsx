import { useState, useEffect } from "react"
import { getArticleComments } from "../api"
import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"

const Comments = ({article_id}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleComments(article_id)
        .then((comments) => {
            setComments(comments)
        })
    }, [])
    return (
        <section>
            <h3>{comments.length} Comments</h3>
            <div className="comment-list">
                {comments.map((comment) => {
                   return <CommentCard key={comment.comment_id} comment={comment} />
                })}
            </div>
            <CommentForm article_id={article_id} setComments={setComments} />
        </section>
   )
}

export default Comments