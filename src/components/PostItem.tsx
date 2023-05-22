import { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, update }) => {
  const handleRemove = () => {
    remove(post);
  };

  const handleUpdate = () => {
    const title = prompt() || '';
    update({ ...post, title });
  };

  return (
    <div className="postItem">
      <div onClick={handleUpdate}>
        <span>{post.id}</span>
        <div className="title">{post.title}</div>
      </div>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default PostItem;
