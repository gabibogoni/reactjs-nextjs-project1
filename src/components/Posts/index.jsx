import './styles.css';

import { PostCard } from "../PostCard"

export const PostSection = ({posts}) => (
    <div className="posts">
        {posts.map(arrayElementPost => (
            <PostCard
                key={arrayElementPost.id}  
                title={arrayElementPost.title} 
                body={arrayElementPost.body}
                id={arrayElementPost.id}
                imagem={arrayElementPost.imagem}     
            />
        ))}
    </div>
)
