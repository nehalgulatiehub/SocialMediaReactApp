import React, { useContext } from "react";
import { Context } from "../Store/Context";
import { MdDelete } from "react-icons/md";

const ShowPost = ({ post }) => {
  const { delPost } = useContext(Context);
  

  return (
    <>
      <div className="postview">
        <div class="card " style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => delPost(post.id)}
          >
            <MdDelete />

            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={post.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text" style={{ fontSize: "12px" }}>
              Author : {post.userId} | Posted on : {post.date}
            </p>
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
            <div className="tagscont">
              <span class="badge text-bg-primary tags">{post.tag[0]}</span>
              <span class="badge text-bg-warning tags">{post.tag[1]}</span>
              <span class="badge text-bg-primary tags">{post.tag[2]}</span>
            </div>
            <a href="#" class="btn btn-primary">
              View Post
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPost;
