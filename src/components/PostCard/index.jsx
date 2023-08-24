import P from 'prop-types';
import './styles.css';

export const PostCard = ({ imagem, title, id, body }) => {
  return (
    <div className="post">
      <img src={imagem} alt={title} />
      <div className="post-content">
        <h2>
          {title} {id}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  imagem: P.string,
  title: P.string.isRequired,
  id: P.number.isRequired,
  body: P.string.isRequired,
};
