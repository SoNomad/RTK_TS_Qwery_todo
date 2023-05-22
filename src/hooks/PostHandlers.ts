import { useState } from 'react';
import { postAPI } from '../services/PostService';
import { IPost } from '../models/IPost';

const usePost = () => {
  const [limit, setLimit] = useState(10); // [state, setState
  const { data: posts, isLoading, isError } = postAPI.useFetchPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleLimitChange = () => {
    setLimit((prev) => prev + 5);
  };

  const handleDeletePost = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdatePost = (post: IPost) => {
    updatePost(post);
  };

  const handleAddPost = async () => {
    const title = prompt('Enter post title');
    await createPost({ title, body: title } as IPost);
    setLimit((prev) => prev + 1);
  };

  return {
    posts,
    isLoading,
    isError,
    handleDeletePost,
    handleUpdatePost,
    handleAddPost,
    handleLimitChange,
  };
};

export default usePost;
