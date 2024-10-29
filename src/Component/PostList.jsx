import React, { useContext } from "react";
import ShowPost from "./ShowPost";
import { Context } from "../Store/Context";

const PostList = () => {
  const { postList } = useContext(Context);

  return (
    <>
      {postList.map((post) => (
        <ShowPost key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
