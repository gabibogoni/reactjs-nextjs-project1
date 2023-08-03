import { PostCard } from "../PostCard"

export const PostSection = ({posts}) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}  
                title={post.title} 
                body={post.body}
                id={post.id}
                imagem={post.imagem}     
            />
        ))}
    </div>
)
