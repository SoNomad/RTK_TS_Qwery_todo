import { FC } from 'react';
import PostItem from './PostItem';
import usePost from '../hooks/PostHandlers';
import Loader from './Loader';

const PostContainer: FC = () => {
  const {
    handleAddPost,
    handleDeletePost,
    handleUpdatePost,
    handleLimitChange,
    isError,
    isLoading,
    posts,
  } = usePost();

  return (
    <div>
      {isLoading && <Loader />}
      {isError && <h1>Error</h1>}
      <div>
        {posts?.length == 0 ? (
          <h1>No Posts</h1>
        ) : (
          posts?.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              remove={handleDeletePost}
              update={handleUpdatePost}
            />
          ))
        )}
      </div>
      <div className="btns" style={{ display: `${isLoading ? 'none' : 'flex'}` }}>
        <button onClick={handleAddPost}>Add Post</button>
        <button onClick={handleLimitChange}>Load More</button>
      </div>
    </div>
  );
};

export default PostContainer;
