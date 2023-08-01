export const PostCard = ({imagem, title, id, body}) => {
    return (
        <div className="post">
            <img src={imagem} alt={title} />
            <div className="post-content">
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}